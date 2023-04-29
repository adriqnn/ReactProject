import { useContext } from "react";
import { Link } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { BurgerContext } from "../../../contexts/BurgerContext";
import { Burger } from "./Burger";
import './Burgers.css';

export const Burgers = () => {
    const { isAuthenticated } = useContext(ApplicationContext);
    const { burgers, errorFetchingBurgersData } = useContext(BurgerContext);
 
    return (
        <>
            <main className="burgers-main" id="burgers-main">
                <section className="burgers-page-container">
                    <header className="burgers-page-container-header">
                        <h1 className="burgers-page-container-h1">We make the best Burgers in town and here is a list of our Burgers!</h1>
                        <div className="burgers-page-container-line"></div>
                        <div className="burgers-page-container-links">
                            { 
                                isAuthenticated && (
                                    <>
                                        <Link to="/burgers/create" className="burgers-page-container-link"> Add Burger </Link>
                                        | 
                                    </>
                                )
                            }
                            <Link to="/burgers/burger-ingredients" className="burgers-page-container-link"> Ingredients </Link>
                        </div>
                        <p className="burgers-page-container-burgers-list">Burgers List:</p>
                    </header>
                    <div className="burgers-card-gallery">
                        {
                            burgers.length > 0 && burgers.map(x => <Burger key={x._id} {...x}/>)
                        }
                        {
                            // todo
                            (burgers.length <= 0 || errorFetchingBurgersData) && (
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