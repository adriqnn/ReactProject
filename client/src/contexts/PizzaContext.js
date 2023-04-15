import { createContext } from "react";
import { ApplicationContext } from "./ApplicationContext";

const PizzaContext = createContext();

export const PizzaProvider = ({
    children,
}) => {

    const context = {

    };

    return (
        <>
            <PizzaContext.Provider value={context}>
                {children}
            </PizzaContext.Provider>
        </>
    );
};

export const usePizzaContext = () => {
    const context = usePizzaContext(ApplicationContext);
    return context;
};