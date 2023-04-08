import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { Navigate, useParams } from "react-router-dom";
import { pizzaServiceFactory } from "../../../services/pizzaService";

export const PizzaDelete = () => {
    const { auth } = useContext(ApplicationContext);
    const { pizzaId, ownerId } = useParams();
    const pizzaService = pizzaServiceFactory(auth.token);
    const [deleteNoOwner, setDeleteNoOwner] = useState(false);

    useEffect(() => {
        if(ownerId === auth.user._id){
            pizzaService.deletePizza(pizzaId).then(() => {
                setDeleteNoOwner(false);
            });
        }else{
            setDeleteNoOwner(true);
        }
    }, []);

    return !!deleteNoOwner ? <Navigate to="/"/> : <Navigate to="/pizzas/pizza-ingredients"/>;
};