import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { Navigate, useParams } from "react-router-dom";
import { BurgerContext } from "../../../contexts/BurgerContext";

export const BurgerDelete = () => {
    const { auth } = useContext(ApplicationContext);
    const { burgerId, ownerId } = useParams();
    const { deleteNoOwner, onDeleteBurger } = useContext(BurgerContext);

    useEffect(() => {
       onDeleteBurger(burgerId, ownerId);
    }, []);

    return !!deleteNoOwner ? <Navigate to="/"/> : <Navigate to="/burgers/"/>;
};