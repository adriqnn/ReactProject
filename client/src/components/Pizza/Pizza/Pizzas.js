import { useContext } from "react";
import { Link } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { PizzaContext } from "../../../contexts/PizzaContext";
import { Pizza } from "./Pizza";
import './Pizzas.css';

export const Pizzas = () => {
    const { isAuthenticated } = useContext(ApplicationContext);
    const { pizzas, errorFetchingPizzasData } = useContext(PizzaContext)

    return (
        <>
            <main className="pizzas-main" id="pizzas-main">
                <section className="pizzas-page-container">
                    <header className="pizzas-page-container-header">
                        <h1 className="pizzas-page-container-h1">We make the best Pizzas in town and here is a list of our Pizzas!</h1>
                        <div className="pizzas-page-container-line"></div>
                        <div className="pizzas-page-container-links">
                            {
                                isAuthenticated && (
                                    <>
                                        <Link to="/pizzas/create" className="pizzas-page-container-link"> Add Pizza </Link> 
                                        | 
                                    </>
                                )
                            }
                            <Link to="/pizzas/pizza-ingredients" className="pizzas-page-container-link"> Ingredients </Link>
                        </div>
                        <p className="pizzas-page-container-pizzas-list">Pizzas List:</p>
                    </header>
                    <div className="pizzas-card-gallery">
                        {
                            pizzas.length > 0 && pizzas.map(x => <Pizza key={x._id} {...x}/>)
                        }
                        {
                            // todo
                            (pizzas.length <= 0 || errorFetchingPizzasData) && (
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