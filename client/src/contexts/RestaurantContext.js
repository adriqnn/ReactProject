import { createContext, useContext } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({
    children,
}) => {
    
    const context = {

    };

    return (
        <>
            <RestaurantContext.Provider value={context}>
                {children}
            </RestaurantContext.Provider>
        </>
    );
};

export const useRestaurantContext = () => {
    const context = useContext(RestaurantContext);
    return context;
};