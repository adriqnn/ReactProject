import { useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { PizzaContext } from "../../../contexts/PizzaContext";

export const PizzaDelete = () => {
    const { pizzaId, ownerId } = useParams();
    const { deleteNoOwner, onDeletePizza } = useContext(PizzaContext);

    useEffect(() => {
        onDeletePizza(pizzaId, ownerId);
    }, []);

    return !!deleteNoOwner ? <Navigate to="/"/> : <Navigate to="/pizzas"/>;
};