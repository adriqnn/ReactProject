import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { Pizza } from "./Pizza";
import { PizzaContext } from "../../../contexts/PizzaContext";

export const Pizzas = () => {
    const { isAuthenticated } = useContext(ApplicationContext);
    const { pizzas, errorFetchingPizzasData } = useContext(PizzaContext)

    return (
        <main>
            <section className="container" id="pizzas-main">
                <header className="ingredient">
                    <h1 style={{fontFamily: "cursive"}}>
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>We make the best Pizzas in town and here is a list of our Pizzas!</p>
                        <p> </p>
                        <p className="line"></p>
                        <p>&nbsp;&nbsp;&nbsp;</p>

                        {
                            isAuthenticated && (
                                <>
                                    <Link to="/pizzas/create" style={{color: "gold"}}> Add Pizza </Link> 
                                    | 
                                </>
                            )
                        }

                        <Link to="/pizzas/pizza-ingredients" style={{color: "gold"}}> Ingredients </Link>
                    </h1>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "22px"}}>Pizzas List:</p>
                </header>
                <div className="row text-center">

                    {
                        pizzas.length > 0 && pizzas.map(x => <Pizza key={x._id} {...x}/>)
                    }
                    {
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
    );
};