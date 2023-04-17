import { useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { RestaurantContext } from "../../../contexts/RestaurantContext";


export const RestaurantDelete = () => {
    const { restaurantId, ownerId } = useParams();
    const { deleteNoOwner, onDeleteRestaurant } = useContext(RestaurantContext);
    
    useEffect(() => {
        onDeleteRestaurant(restaurantId, ownerId);
    }, []);

    return !!deleteNoOwner ? <Navigate to="/"/> : <Navigate to="/restaurants"/>;
};