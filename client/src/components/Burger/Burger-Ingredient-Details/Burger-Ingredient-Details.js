import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { burgerServiceFactory } from "../../../services/burgerService";

export const BurgerIngredientDetails = () => {
    const { burgerIngredientId } = useParams();
    const { auth } = useContext(ApplicationContext);
    const [burgerIngredintById, setBurgerIngredientById] = useState({});
    const burgerService = burgerServiceFactory(auth.token);

    useEffect(() => {
        burgerService.getOneBurgerIngredientById(burgerIngredientId).then(result => {
            setBurgerIngredientById(result);
        });
    }, []);

    return (
        <main>
            <section className="py-5 details" id="pizza-ingredient-details-page">
                <div className="container">
                    <div className="item-details">
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza Burger Spot</h1>
                    </div>
                    <p className="line"></p>
                    <div className="item-info">
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Burger Ingrediet Details for {burgerIngredintById.name}:</p>
                        <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Type: {burgerIngredintById.type}</p>
                        <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Weight: {burgerIngredintById.weight}g</p>
                    </div>
                    <p className="line"></p>
                    <div className="item-picanddesc">
                        <div>
                            <img className="img-fluid rounded"
                                src={burgerIngredintById.picture}
                                alt="burger-ingredient-image"/>
                        </div>
                        <div className="item-desc">
                            <h5 style={{fontStyle: "italic", fontFamily: "cursive"}}>Description</h5>
                            <textarea className="lead" disabled style={{fontStyle: "italic", fontFamily: "cursive"}} value={burgerIngredintById.description}></textarea>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};