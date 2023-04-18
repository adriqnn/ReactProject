import { useContext } from "react";
import { Link } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { RestaurantContext } from "../../../contexts/RestaurantContext";
import { Restaurant } from "./Restaurant";
import './Restaurants.css';

export const Restaurants = () => {
    const { isAuthenticated } = useContext(ApplicationContext);
    const { restaurants, errorFetchingRestaurantsData } = useContext(RestaurantContext);

    return (
        <main>
            <section className="container" id="burgers-main">
                <header className="ingredient">
                    <h1 style={{fontFamily: "cursive"}}>
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Restaurant Collection!</p>
                        <p> </p>
                        <p className="line"></p>
                        <p>&nbsp;&nbsp;&nbsp;</p>
                        { 
                            isAuthenticated && (
                                <>
                                    <Link to="/restaurants/create" style={{color: "gold"}}> Add Restaurant </Link>
                                </>
                            )
                        }
                    </h1>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "22px"}}>Restaurants List:</p>
                </header>
                <div className="row text-center">
                    {
                        restaurants.length > 0 && restaurants.map(x => <Restaurant key={x._id} {...x}/>)
                    }
                    {
                        (restaurants.length <= 0) && (
                            <>
                                <div className="no-ingredients">
                                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>There are no restaurants in the collection!</p>
                                </div>
                            </>
                        )
                    }
                    {
                        (errorFetchingRestaurantsData) && (
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