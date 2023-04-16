import { useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { BurgerContext } from "../../../contexts/BurgerContext";

export const BurgerDelete = () => {
    const { burgerId, ownerId } = useParams();
    const { deleteNoOwner, onDeleteBurger } = useContext(BurgerContext);

    useEffect(() => {
       onDeleteBurger(burgerId, ownerId);
    }, []);

    return !!deleteNoOwner ? <Navigate to="/"/> : <Navigate to="/burgers"/>;
};