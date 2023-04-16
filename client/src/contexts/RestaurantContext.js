import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";

export const RestaurantContext = createContext();

export const RestaurantProvider = () => {
    
    const context = {

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