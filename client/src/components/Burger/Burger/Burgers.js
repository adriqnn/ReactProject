import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { burgerServiceFactory } from "../../../services/burgerService";
import { Burger } from "./Burger";

export const Burgers = () => {
    const { auth, isAuthenticated } = useContext(ApplicationContext);
    const [burgers, setBurgers] = useState([]);
    const burgerService = burgerServiceFactory(auth.token);

    useEffect(() => {
        burgerService.getAllBurgers().then(result => {
            setBurgers(result);
        });
    }, []);
 
    return (
        <main>
            <section className="container" id="burgers-main">
                <header className="ingredient">
                    <h1 style={{fontFamily: "cursive"}}>
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>We make the best Burgers in town and here is a list of our Burgers!</p>
                        <p> </p>
                        <p className="line"></p>
                        <p>&nbsp;&nbsp;&nbsp;</p>

                        { 
                            isAuthenticated && (
                                <>
                                    <Link to="/burgers/create" style={{color: "gold"}}> Add Burger </Link>
                                    | 
                                </>
                            )
                        }

                        <Link to="/burgers/burger-ingredients" style={{color: "gold"}}> Ingredients </Link>
                    </h1>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "22px"}}>Burgers List:</p>
                </header>
                <div className="row text-center">

                    {
                        burgers.length > 0 && burgers.map(x => <Burger key={x._id} {...x}/>)
                    }

                    {
                        burgers.length <= 0 && (
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