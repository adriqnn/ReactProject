import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { burgerServiceFactory } from "../../../services/burgerService";

export const BurgerDelete = () => {
    const navigate = useNavigate();
    const { auth } = useContext(ApplicationContext);
    const { burgerId, ownerId } = useParams();
    const burgerService = burgerServiceFactory(auth.token);
    const [deleteNoOwner, setDeleteNoOwner] = useState(false);

    useEffect(() => {
        if(ownerId === auth.user._id){
            burgerService.deleteBurger(burgerId).then(result => {
                setDeleteNoOwner(false);
            });
        }else{
            setDeleteNoOwner(true);
        }
    }, []);

    return deleteNoOwner ? navigate('/') : <Navigate to="/burgers"/>;
};