import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { pizzaServiceFactory } from "../../../services/pizzaService";

export const PizzaDetails = () => {
    const { pizzaId } = useParams();
    const { auth } = useContext(ApplicationContext);
    const pizzaService = pizzaServiceFactory(auth.token);

    const [pizzaById, setPizzaById] = useState({});
    const [errorFetchingPizzaByIdData, setErrorFetchingPizzaByIdData] = useState(false);

    useEffect(() => {
        pizzaService.getPizzaById(pizzaId).then(result => {
            setPizzaById(result);
        }).catch(() => {
            setErrorFetchingPizzaByIdData(true);
        });
    }, [pizzaId]);

    return (
        <main>
            <section className="py-5 details" id="pizza-ingredient-details-page">
                <div className="container">
                    <div className="item-details">
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza Burger Spot</h1>
                    </div>
                    <p className="line"></p>
                    {
                        !errorFetchingPizzaByIdData && (
                            <>
                                <div className="item-info">
                                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Pizza details for {pizzaById.name}:</p>
                                    <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Weight: {pizzaById.weight}g</p>
                                </div>
                                <p className="line"></p>
                                <div className="item-info">
                                    <p>&nbsp;&nbsp;&nbsp;</p>
                                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Ingredients for {pizzaById.name}:</p>
                                    {
                                        pizzaById.ingredients?.map(x => <p key={x.name} className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>{x.name} - {x.description}</p>)
                                    }
                                    <p>&nbsp;&nbsp;&nbsp;</p>
                                </div>
                                <p className="line"></p>
                                <div className="item-picanddesc">
                                    <div>
                                        <img className="img-fluid rounded"
                                            src={pizzaById.picture}
                                            alt="pizza-ingredient"/>
                                    </div>
                                    <div className="item-desc">
                                        <h5 style={{fontStyle: "italic", fontFamily: "cursive"}}>Description</h5>
                                        <textarea className="lead" disabled style={{fontStyle: "italic", fontFamily: "cursive"}} value={pizzaById.description}></textarea>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    <div className="row text-center">
                        {
                            pizzaById.owner === auth.user?._id && (
                                <div className="col-lg-4 col-md-6 mb-4">                        
                                <div>
                                    <Link to={`/pizzas/item/delete/${pizzaId}/${pizzaById.owner}`} className="btn btn-danger">Delete</Link>
                                </div>
                            </div>
                            )
                        }
                        {
                            (errorFetchingPizzaByIdData) && (
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