import { useContext, useEffect, useState } from "react";
import { burgerServiceFactory } from "../../../services/burgerService";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { BurgerIngredient } from "./Burger-Ingredient";

export const BurgerIngredients = () => {
    const { auth } = useContext(ApplicationContext);
    const [burgerIngredients, setBurgerIngredients] = useState([]);
    const burgerService = burgerServiceFactory(auth.token);

    useEffect(() => {
        burgerService.getAllBurgerIngredients().then(result => {
            setBurgerIngredients(result);
        });
    }, []);

    return (
        <main>
            <section className="container" id="burger-ingredient">
                <header className="ingredient">
                    <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>We make our burgers with the freshest ingredients out there!</p>
                    <p> </p>
                    <p className="line"></p>
                    <p>&nbsp;&nbsp;&nbsp;</p>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Here is a list of products we use in the making of the burgers!</p>
                    <p> </p>
                    <p className="line"></p>
                </header>
                <div className="row text-center">
                    {
                        burgerIngredients.length > 0 && burgerIngredients.map(x => <BurgerIngredient key={x._id} {...x}/>)
                        
                    }
                    {
                        burgerIngredients.length <= 0 && (
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