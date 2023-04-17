import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { restaurantServiceFactory } from "../../../services/restaurantService";

export const RestaurantDetails = () => {
    const { restaurantId } = useParams();
    const { auth } = useContext(ApplicationContext);
    const restaurantService = restaurantServiceFactory(auth.token);

    const [restaurantById, setRestaurantById] = useState({});
    const [errorFetchingRestaurantByIdData, setErrorFetchingRestaurantByIdData] = useState(false);

    useEffect(() => {
        restaurantService.getRestaurantById(restaurantId).then(result => {
            setRestaurantById(result);
        }).catch(() => {
            setErrorFetchingRestaurantByIdData(true);
        });
    }, [restaurantId]);

    return (
        <main>
            <section className="py-5 details" id="pizza-ingredient-details-page">
                <div className="container">
                    <div className="item-details">
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza Burger Spot</h1>
                    </div>
                    <p className="line"></p>
                    {
                      !errorFetchingRestaurantByIdData &&  (
                        <>
                            <div className="item-info">
                                <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Restaurant details for {restaurantById.name}:</p>
                                <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Address: {restaurantById.address}</p>
                                <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Rating: {restaurantById.rating}</p>
                            </div>
                            <p className="line"></p>
                            <p className="line"></p>
                            <div className="item-picanddesc">
                                <div>
                                    <img className="img-fluid rounded"
                                        src={restaurantById.picture}
                                        alt="restaurant"/>
                                </div>
                                <div className="item-desc">
                                    <h5 style={{fontStyle: "italic", fontFamily: "cursive"}}>Description</h5>
                                    <textarea className="lead" disabled style={{fontStyle: "italic", fontFamily: "cursive"}} value={restaurantById.description}></textarea>
                                </div>
                            </div>
                        </>
                      )
                    }
                    <div className="row text-center">
                        {
                            restaurantById.owner === auth.user?._id && (
                                <div className="col-lg-4 col-md-6 mb-4">                        
                                <div>
                                    <Link to={`/restaurants/item/update/${restaurantId}/${restaurantById.owner}`} className="btn btn-danger">Update</Link>
                                    &nbsp;&nbsp;&nbsp;  
                                    <Link to={`/restaurants/item/delete/${restaurantId}/${restaurantById.owner}`} className="btn btn-danger">Delete</Link>
                                </div>
                            </div>
                            )
                        }
                        {
                            (errorFetchingRestaurantByIdData) && (
                                <div className="no-ingredients">
                                    <img src="/assets/pictures/main/404missin.png" alt="missing"/>
                                    <p className="lead">Please try again later...</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </main>
    );
};