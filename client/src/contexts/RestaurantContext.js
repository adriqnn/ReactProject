import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ApplicationContext } from "./ApplicationContext";
import { restaurantServiceFactory } from "../services/restaurantService";

export const RestaurantContext = createContext();

export const RestaurantProvider = () => {
    const navigate = useNavigate();
    const { auth } = useContext(ApplicationContext);
    const restaurantService = restaurantServiceFactory(auth.token);

    const [restaurants, setRestaurants] = useState([]);
    const [errorFetchingRestaurantsData, setErrorFetchingRestaurantsData] = useState(false);
    
    useEffect(() => {
        restaurantService.getAllRestaurants().then(result => {
            setRestaurants(result);
            setErrorFetchingRestaurantsData(false);
        }).catch(() => {
            setErrorFetchingRestaurantsData(true);
        });
    }, []);

    const [restaurantFormFieldsError, setRestaurantFormFieldsError] = useState(false);
    const [restaurantServerOffline, setRestaurantServerOffline] = useState(false);
    const onRestaurantCreateFormSubmit = async (restaurantData) => {
        const { name, address, description, rating } = restaurantData;

        if(name === '' || address === '' || description === '' || rating === ''){
            setRestaurantFormFieldsError(true);
            removeMessage();
            return;
        };

        const owner = auth.user._id;
        const restaurant = {name, address, description, rating, owner: owner};

        try{
            const newRestaurant = await restaurantService.createRestaurant(restaurant);
            setRestaurants(state => [...state, newRestaurant.restaurant]);
            navigate('/restaurants');
        }catch(err){
            err.message === 'NetworkError when attempting to fetch resource.' ? setRestaurantServerOffline(true) : setRestaurantServerOffline(false);
            removeMessage();
        };
    };

    const [updateRestaurantFormFieldsError, setUpdateRestaurantFormFieldsError] = useState(false);
    const [updateRestaurantServerOffline, setUpdateRestauranteServerOffline] = useState(false);
    const onRestaurantUpdateFormSubmit = async (restaurantData, restaurantId) => {
        const { name, address, description, rating } = restaurantData;

        if(name === '' || address === '' || description === '' || rating === ''){
            setUpdateRestaurantFormFieldsError(true);
            removeMessage();
            return;
        };

        const owner = auth.user._id;
        const restaurant = {name, address, description, rating, owner: owner, restaurantId: restaurantId};
        try{
            const updatedRestaurant = await restaurantService.updateRestaurant(restaurant);
            setRestaurants(state => state.map(x => x._id === updatedRestaurant._id ? updatedRestaurant : x));
            navigate('/restaurants');
        }catch(err){
            err.message === 'NetworkError when attempting to fetch resource.' ? setUpdateRestauranteServerOffline(true) : setUpdateRestauranteServerOffline(false);
            removeMessage();
        };
    };

    const [deleteNoOwner, setDeleteNoOwner] = useState(false);
    const onDeleteRestaurant = async (restaurantId, ownerId) => {
        if(ownerId === auth.user._id){
            restaurantService.deleteRestaurant(restaurantId).then(() => {
                setDeleteNoOwner(false);
                setRestaurants(state => state.filter(x => x._id !== restaurantId));
            }).catch(() => {
                return;
            });
        }else{
            setDeleteNoOwner(true);
        };
    };

    const getRestaurantById = (id) => {
        return restaurants.filter(x => x._id === id)[0];
    };

    function removeMessage(){
        setTimeout(() => {
            setRestaurantFormFieldsError(false);
            setRestaurantServerOffline(false);
            setUpdateRestaurantFormFieldsError(false);
            setUpdateRestauranteServerOffline(false);
        }, 5000);
    };
    
    const context = {
        errorFetchingRestaurantsData,
        restaurants,
        restaurantFormFieldsError,
        restaurantServerOffline,
        onRestaurantCreateFormSubmit,
        updateRestaurantFormFieldsError,
        updateRestaurantServerOffline,
        onRestaurantUpdateFormSubmit,
        deleteNoOwner,
        onDeleteRestaurant,
        getRestaurantById
    };

    return (
        <>
            <RestaurantContext.Provider value={context}>
                <Outlet/>
            </RestaurantContext.Provider>
        </>
    );
};

export const useRestaurantContext = () => {
    const context = useContext(RestaurantContext);
    return context;
};