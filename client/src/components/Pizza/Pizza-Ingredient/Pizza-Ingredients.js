import { useContext, useEffect, useState } from "react";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { pizzaServiceFactory } from "../../../services/pizzaService";
import { PizzaIngredient } from "./Pizza-Ingredient";
import './Pizza-Ingredients.css';

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
        <>
            <main className="pizza-ingredients-main" id="pizza-ingredients-main">
                <section className="pizza-ingredients-page-container">

                <header className="pizza-ingredients-page-container-header">
                        <h1 className="pizza-ingredients-page-container-h1">We make our pizzas with the freshest ingredients out there!</h1>
                        <div className="pizza-ingredients-page-container-line"></div>
                        <p className="pizza-ingredients-page-container-burger-ingredients-list">Pizza Ingredients List:</p>
                    </header>
                    <div className="pizza-ingredients-card-gallery">
                        {
                            pizzaIngredients.length > 0 && pizzaIngredients.map(x => <PizzaIngredient key={x._id} {...x}/>)
                        }
                        {
                            //todo
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
            <div className="footer-divider"></div>
        </>
    );
};