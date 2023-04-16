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

    const [pizzaFormFieldsError, setPizzaFormFieldsErros] = useState(false);
    const [pizzaNameTaken, setPizzaNameTaken] = useState(false);
    const [pizzzaServerOffline, setPizzaServerOffline] = useState(false);
    const onPizzaCreateFormSubmit = async (pizzaData) =>{
        const {name, weight, description, dough, ...rest } = pizzaData;
        const main = {name, weight, description, dough};

        if(name === '' || weight === '' || description === '' || dough === ''){
            setPizzaFormFieldsErros(true);
            removeMessage();
            return;
        };

        const secondary = {
            basil: !!rest.basil === true ? 'Basil' : '',
            chicken: !!rest.chicken === true ? 'Chicken' : '',
            corn: !!rest.corn === true ? 'Corn' : '',
            emental: !!rest.emental === true ? 'Emental' : '',
            flakysalt: !!rest.flakysalt === true ? 'Flaky Salt' : '',
            garlicpowder: !!rest.garlicpowder === true ? 'Garlic Powder' : '',
            greenpeppers: !!rest.greenpeppers === true ? 'Green Peppers' : '',
            ketchup: !!rest.ketchup === true ? 'Ketchup' : '',
            mozzarella: !!rest.mozzarella === true ? 'Mozzarella' : '',
            mushrooms: !!rest.mushrooms === true ? 'Mushrooms' : '',
            olives: !!rest.olives === true ? 'Olives' : '',
            onions: !!rest.onions === true ? 'Onions' : '',
            oregano: !!rest.oregano === true ? 'Oregano' : '',
            pepperoni: !!rest.pepperoni === true ? 'Pepperoni' : '',
            pickles: !!rest.pickles === true ? 'Pickles' : '',
            smokedbacon: !!rest.smokedbacon === true ? 'Smoked Bacon' : '',
            smokedcheese: !!rest.smokedcheese === true ? 'Smoked Cheese' : '',
            smokedham: !!rest.smokedham === true ? 'Smoked Ham' : '',
            sourcream: !!rest.sourcream === true ? 'Sour Cream' : '',
            tomatoes: !!rest.tomatoes === true ? 'Tomatoes' : '',
            tomatosauce: !!rest.tomatosauce === true ? 'Tomato Sauce' : '',
        };
        const owner = auth.user._id;
        const pizza = {main: main, secondary: secondary, owner: owner};

        try{
            const newPizza = await pizzaService.createPizza(pizza);
            setPizzas(state => [...state, newPizza.pizza]);
            navigate('/pizzas');
        }catch(err){
            err.message === 'Pizza name already in the Database!' ? setPizzaNameTaken(true) : setPizzaNameTaken(false);
            err.message === 'NetworkError when attempting to fetch resource.' ? setPizzaServerOffline(true) : setPizzaServerOffline(false);
            removeMessage();
        };
    };

    function removeMessage(){
        setTimeout(() => {
            setPizzaFormFieldsErros(false);
            setPizzaNameTaken(false);
            setPizzaServerOffline(false);
        }, 5000);
    };

    const context = {
        errorFetchingPizzasData,
        pizzas,
        pizzaFormFieldsError,
        pizzaNameTaken,
        pizzzaServerOffline,
        onPizzaCreateFormSubmit,
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