import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { burgerServiceFactory } from "../../../services/burgerService";
import { pizzaServiceFactory } from "../../../services/pizzaService";

export const Profile = () => {
    const { auth } = useContext(ApplicationContext);
    const burgerService = burgerServiceFactory(auth.token);
    const pizzaService = pizzaServiceFactory(auth.token);

    const [burgers, setBurgers] = useState([]);
    const [pizzas, setPizzas] = useState([]);
    const [errorFetchingBurgerData, setErrorFetchingBurgerData] = useState(false);
    const [errorFetchingPizzaData, setErrorFetchingPizzaData] = useState(false);

    useEffect(() => {
        burgerService.getUserBurgers(auth.user._id).then(result => {
            setBurgers(result);
        }).catch(() => {
            setErrorFetchingBurgerData(true);
            // resetErrors();
        });
        pizzaService.getUserPizzas(auth.user._id).then(result => {
            setPizzas(result);
        }).catch(() => {
            setErrorFetchingPizzaData(true);
            // resetErrors();
        });
    }, []);

    function resetErrors(){
        setTimeout(() => {
            setErrorFetchingBurgerData(false);
            setErrorFetchingPizzaData(false);
        }, 5000);
    };

    function getDate(timestamp){
        const date = new Date(Number(timestamp));
        return date.toLocaleDateString();
    };

    return (
        <main>
            <section className="profile col-md-6 text-center col-lg" id="profile-page">
                <div className="profile-container">
                    <img className="profile-img" src="/assets/pictures/main/profilepic.png" alt="profile"/>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "20px", color: "greenyellow"}}>Username: {auth.user.username}<span></span></p>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "20px", color: "greenyellow"}}>Email: {auth.user.email}<span></span></p>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "18px", color: "greenyellow"}}>Created at: {getDate(auth.user.createdAt)}<span></span></p>
                    <div className="card-footer">
                        <Link to={`/auth/profile/update/${auth.user._id}`} className="btn btn-success">Update Profile!</Link>
                    </div>
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
                            errorFetchingBurgerData && (
                                <p>Data cannot be displayed right now!</p>
                            )
                        }
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
                            errorFetchingPizzaData && (
                                <p>Data cannot be displayed right now!</p>
                            )
                        }
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