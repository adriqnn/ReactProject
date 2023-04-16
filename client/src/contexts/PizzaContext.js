import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { ApplicationContext } from "./ApplicationContext";
import { pizzaServiceFactory } from "../services/pizzaService";

export const PizzaContext = createContext();

export const PizzaProvider = () => {
    const navigate = useNavigate();
    const { auth } = useContext(ApplicationContext);
    const pizzaService = pizzaServiceFactory(auth.token);

    const [pizzas, setPizzas] = useState([]);
    const [errorFetchingPizzasData, setErrorFetchingPizzasData] = useState(false);

    useEffect(() => {
        pizzaService.getAllPizzas().then(result => {
            setPizzas(result);
            setErrorFetchingPizzasData(false);
        }).catch(() => {
            setErrorFetchingPizzasData(true);
        });
    }, []);

    const context = {
        errorFetchingPizzasData,
        pizzas
    };

    return (
        <>
            <PizzaContext.Provider value={context}>
                <Outlet/>
            </PizzaContext.Provider>
        </>
    );
};

export const usePizzaContext = () => {
    const context = usePizzaContext(ApplicationContext);
    return context;
};