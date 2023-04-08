import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { burgerServiceFactory } from "../../../services/burgerService";
import { pizzaServiceFactory } from "../../../services/pizzaService";

export const Profile = () => {
    const { auth } = useContext(ApplicationContext);
    const [burgers, setBurgers] = useState([]);
    const [pizzas, setPizzas] = useState([]);
    const burgerService = burgerServiceFactory(auth.token);
    const pizzaService = pizzaServiceFactory(auth.token);

    useEffect(() => {
        burgerService.getUserBurgers(auth.user._id).then(result => {
            setBurgers(result);
        });
        pizzaService.getUserPizzas(auth.user._id).then(result => {
            setPizzas(result);
        });
    }, []);

    return (
        <main>
            <section className="profile col-md-6 text-center col-lg" id="profile-page">
                <div className="profile-container">
                    <img className="profile-img" src="/assets/pictures/main/profilepic.png" alt="profile"/>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "20px", color: "greenyellow"}}>Username: {auth.user.username}<span></span></p>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "20px", color: "greenyellow"}}>Email: {auth.user.email}<span></span></p>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "18px", color: "greenyellow"}}>Created at: {auth.user.createdAt}<span></span></p>
                </div>
                <div className="profile-info">
                    
                    {
                        (burgers.length + pizzas.length) > 0 && (
                            <p> <span></span> {`Total Burgers and Pizzas -> ${burgers.length + pizzas.length}`}</p>
                        )
                    }

                    {
                        (burgers.length + pizzas.length) <= 0 && (
                            <p> <span></span> {`Total Burgers and Pizzas -> No Records!`}</p>
                        )
                    }

                    <p className="line"></p>
                    <div className="trips-info">

                        <p style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Burgers:</p>
                        {
                            burgers.length > 0 && (
                                <>
                                    {burgers.map(x =>  <p key={x.name}>{x.name}</p>)}
                                </>
                            )
                        }

                        <p className="line"></p>

                        <p style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizzas:</p>
                        {
                            pizzas.length > 0 && (
                                <>
                                    {pizzas.map(x =>  <p key={x.name}>{x.name}</p>)}
                                </>
                            )
                        }

                    </div>
                </div>
            </section>
        </main>
    );
};