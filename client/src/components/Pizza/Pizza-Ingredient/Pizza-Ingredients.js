import { useContext, useEffect, useState } from "react";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { pizzaServiceFactory } from "../../../services/pizzaService";
import { PizzaIngredient } from "./Pizza-Ingredient";

export const PizzaIngredients = () => {
    const { auth } = useContext(ApplicationContext);
    const pizzaService = pizzaServiceFactory(auth.token);
    
    const [pizzaIngredients, setPizzaIngredients] = useState([]);
    const [errorFetchingPizzaIngredientsData, setErrorFetchingPizzaIngredientsData] = useState(false);

    useEffect(() => {
        pizzaService.getAllPizzaIngredients().then(result => {
            setPizzaIngredients(result);
            setErrorFetchingPizzaIngredientsData(false);
        }).catch(() => {
            setErrorFetchingPizzaIngredientsData(true);
        });
    }, []);

    return (
        <main>
            <section className="container" id="pizza-ingredient">
                <header className="ingredient">
                    <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>We make our pizzas with the freshest ingredients out there!</p>
                    <p> </p>
                    <p className="line"></p>
                    <p>&nbsp;&nbsp;&nbsp;</p>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Here is a list of products we use in the making of the pizzas!</p>
                    <p> </p>
                    <p className="line"></p>
                </header>
                <div className="row text-center">
                    {
                        pizzaIngredients.length > 0 && pizzaIngredients.map(x => <PizzaIngredient key={x._id} {...x}/>)
                    }
                    {
                        (pizzaIngredients.length <= 0 || errorFetchingPizzaIngredientsData) && (
                            <div className="no-ingredients">
                                <img src="/assets/pictures/main/404missin.png" alt="missing"/>
                                <p className="lead">Please try again later...</p>
                            </div>
                        )
                    }
                </div>
            </section>
        </main>
    );
};