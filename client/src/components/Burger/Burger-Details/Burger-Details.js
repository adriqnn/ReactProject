import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { burgerServiceFactory } from "../../../services/burgerService";

export const BurgerDetails = () => {
    const { burgerId } = useParams();
    const { auth } = useContext(ApplicationContext);
    const burgerService = burgerServiceFactory(auth.token);
    
    const [burgerById, setBurgerById] = useState({});
    const [errorFetchingBurgerByIdData, setErrorFetchingBurgerByIdData] = useState(false);

    useEffect(() => {
        burgerService.getBurgerById(burgerId).then(result => {
            setBurgerById(result);
        }).catch(() => {
            setErrorFetchingBurgerByIdData(true);
        });
    }, [burgerId]);

    return (
        <main>
            <section className="py-5 details" id="pizza-ingredient-details-page">
                <div className="container">
                    <div className="item-details">
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza Burger Spot</h1>
                    </div>
                    <p className="line"></p>
                    {
                      !errorFetchingBurgerByIdData &&  (
                        <>
                            <div className="item-info">
                                <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Burger details for {burgerById.name}:</p>
                                <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Weight: {burgerById.weight}g</p>
                            </div>
                            <p className="line"></p>
                            <div className="item-info">
                                <p>&nbsp;&nbsp;&nbsp;</p>
                                <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Ingredients for {burgerById.name}:</p>
                                {
                                    burgerById.ingredients?.map(x => <p key={x.name} className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>{x.name} - {x.description}</p>)
                                }
                                <p>&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <p className="line"></p>
                            <div className="item-picanddesc">
                                <div>
                                    <img className="img-fluid rounded"
                                        src={burgerById.picture}
                                        alt="burger-ingredient"/>
                                </div>
                                <div className="item-desc">
                                    <h5 style={{fontStyle: "italic", fontFamily: "cursive"}}>Description</h5>
                                    <textarea className="lead" disabled style={{fontStyle: "italic", fontFamily: "cursive"}} value={burgerById.description}></textarea>
                                </div>
                            </div>
                        </>
                      )
                    }
                    <div className="row text-center">
                        {
                            burgerById.owner === auth.user?._id && (
                                <div className="col-lg-4 col-md-6 mb-4">                        
                                <div>
                                    <Link to={`/burgers/item/delete/${burgerId}/${burgerById.owner}`} className="btn btn-danger">Delete</Link>
                                </div>
                            </div>
                            )
                        }
                        {
                            (errorFetchingBurgerByIdData) && (
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