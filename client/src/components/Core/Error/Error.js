import { Link } from "react-router-dom";

import './Error.css';

export const Error = () => {
    return (
        <main>
            <section className="container" id="burger-ingredient">
                <header className="ingredient">
                    <h1 style={{fontFamily: "cursive"}}>Welcome to Pizza Burger Spot</h1>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Best Burgers and Pizzas in the biz!</p>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Come and visti us!</p>
                </header>
                <div className="no-ingredients">
                    <img src="/assets/pictures/main/404missin.png"/>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Page not found - please try again later... or got to 
                        <Link to="/" style={{fontStyle: "italic", fontFamily: "cursive"}}> Home </Link>
                        !
                    </p>
                </div>
            </section>
        </main>
    );
};