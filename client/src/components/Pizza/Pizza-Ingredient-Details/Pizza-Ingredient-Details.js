import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { pizzaServiceFactory } from "../../../services/pizzaService";

export const PizzaIngredientDetails = () => {
    const { pizzaIngredientId } = useParams();
    const { auth } = useContext(ApplicationContext);
    const [pizzaIngredientById, setPizzaIngredientById] = useState([]);
    const pizzaService = pizzaServiceFactory(auth.token);

    useEffect(() => {
        pizzaService.getOnePizzaIngredientById(pizzaIngredientId).then(result => {
            setPizzaIngredientById(result);
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
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Pizza Ingrediet Details for {pizzaIngredientById.name}:</p>
                        <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Type: {pizzaIngredientById.type}</p>
                        <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Weight: {pizzaIngredientById.weight}g</p>
                    </div>
                    <p className="line"></p>
                    <div className="item-picanddesc">
                        <div>
                            <img className="img-fluid rounded"
                                src={pizzaIngredientById.picture}
                                alt="pizza-ingredient-image"/>
                        </div>
                        <div className="item-desc">
                            <h5 style={{fontStyle: "italic", fontFamily: "cursive"}}>Description</h5>
                            <textarea className="lead" disabled style={{fontStyle: "italic", fontFamily: "cursive"}} value={pizzaIngredientById.description}></textarea>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};