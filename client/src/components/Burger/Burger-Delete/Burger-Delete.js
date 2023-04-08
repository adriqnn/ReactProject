import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { Navigate, useParams } from "react-router-dom";
import { burgerServiceFactory } from "../../../services/burgerService";

export const BurgerDelete = () => {
    const { auth } = useContext(ApplicationContext);
    const { burgerId, ownerId } = useParams();
    const burgerService = burgerServiceFactory(auth.token);
    const [deleteNoOwner, setDeleteNoOwner] = useState(false);

    useEffect(() => {
        if(ownerId === auth.user._id){
            burgerService.deleteBurger(burgerId).then(() => {
                setDeleteNoOwner(false);
            });
        }else{
            setDeleteNoOwner(true);
        }
    }, []);

    return deleteNoOwner ? <Navigate to="/"/> : <Navigate to="/burgers"/>;
};