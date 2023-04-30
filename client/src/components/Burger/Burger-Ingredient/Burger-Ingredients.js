import { useContext, useEffect, useState } from "react";

import { burgerServiceFactory } from "../../../services/burgerService";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { BurgerIngredient } from "./Burger-Ingredient";
import './Burger-Ingredients.css';

export const BurgerIngredients = () => {
    const { auth } = useContext(ApplicationContext);
    const burgerService = burgerServiceFactory(auth.token);

    const [burgerIngredients, setBurgerIngredients] = useState([]);
    const [errorFetchingBurgerIngredientsData, setErrorFetchingBurgerIngredientsData] = useState(false);

    useEffect(() => {
        burgerService.getAllBurgerIngredients().then(result => {
            setBurgerIngredients(result);
            setErrorFetchingBurgerIngredientsData(false)
        }).catch(() => {
            setErrorFetchingBurgerIngredientsData(true);
        });
    }, []);

    return (
        <>
            <main className="burger-ingredients-main" id="burger-ingredients-main">
                <section className="burger-ingredients-page-container">
                    <header className="burger-ingredients-page-container-header">
                        <h1 className="burger-ingredients-page-container-h1">We make our burgers with the freshest ingredients out there!</h1>
                        <div className="burger-ingredients-page-container-line"></div>
                        <p className="burger-ingredients-page-container-burger-ingredients-list">Burger Ingredients List:</p>
                    </header>
                    <div className="burger-ingredients-card-gallery">
                        {
                            burgerIngredients.length > 0 && burgerIngredients.map(x => <BurgerIngredient key={x._id} {...x}/>)                       
                        }
                        {
                            (burgerIngredients.length <= 0 || errorFetchingBurgerIngredientsData) && (
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