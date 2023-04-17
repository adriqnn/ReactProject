import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { ApplicationContext } from "./ApplicationContext";
import { burgerServiceFactory } from "../services/burgerService";

export const BurgerContext = createContext();

export const BurgerProvider = () => {
    const navigate = useNavigate();
    const { auth } = useContext(ApplicationContext);
    const burgerService = burgerServiceFactory(auth.token);

    const [burgers, setBurgers] = useState([]);
    const [errorFetchingBurgersData, setErrorFetchingBurgersData] = useState(false); 

    useEffect(() => {
        burgerService.getAllBurgers().then(result => {
            setBurgers(result);
            setErrorFetchingBurgersData(false);
        }).catch(() => {
            setErrorFetchingBurgersData(true);
        });
    }, []);

    const [burgerFormFieldsError, setBurgerFormFieldsErros] = useState(false);
    const [burgerNameTaken, setBurgerNameTaken] = useState(false);
    const [burgerServerOffline, setBurgerServerOffline] = useState(false);
    const onBurgerCreateFormSubmit = async (burgerData) => {
        const {name, weight, description, bun, ...rest } = burgerData;
        const main = {name, weight, description, bun};

        if(name === '' || weight === '' || description === '' || bun === ''){
            setBurgerFormFieldsErros(true);
            removeMessage();
            return;
        };

        const secondary = {
        bacon: !!rest.bacon === true ? 'Bacon' : '',
        beef: !!rest.beef === true ? 'Beef' : '',
        blackpepper: !!rest.blackpepper === true ? 'Black Pepper' : '',
        burgersauce: !!rest.burgersauce === true ? 'Burger Sauce' : '',
        caramelizedonions: !!rest.caramelizedonions === true ? 'Caramelized Onions' : '',
        cheddar: !!rest.cheddar === true ? 'Cheddar' : '',
        chicken: !!rest.chicken === true ? 'Chicken' : '',
        egg: !!rest.egg === true ? 'Egg' : '',
        emental: !!rest.emental === true ? 'Emental' : '',
        fish: !!rest.fish === true ? 'Fish' : '',
        flakysalt: !!rest.flakysalt === true ? 'Flaky Salt' : '',
        friedonions: !!rest.friedonions === true ? 'Fried Onions' : '',
        garlicpowder: !!rest.garlicpowder === true ? 'Garlic Powder' : '',
        gouda: !!rest.gouda === true ? 'Gouda' : '',
        greenpepper: !!rest.greenpepper === true ? 'Green Peppers' : '',
        ketchup: !!rest.ketchup === true ? 'Ketchup' : '',
        lettuce: !!rest.lettuce === true ? 'Lettuce' : '',
        mayonnaise: !!rest.mayonnaise === true ? 'Mayonnaise' : '',
        mushrooms: !!rest.mushrooms === true ? 'Mushrooms' : '',
        mustard: !!rest.mustard === true ? 'Mustard' : '',
        onions: !!rest.onions === true ? 'Onions' : '',
        pepperoni: !!rest.pepperoni === true ? 'Pepperoni' : '',
        pickles: !!rest.pickles === true ? 'Pickles' : '',
        tomatoes: !!rest.bacon === true ? 'Tomatoes' : '',
        };
        const owner = auth.user._id;
        const burger = {main: main, secondary: secondary, owner: owner};

        try{
            const newBurger = await burgerService.createBurger(burger);
            setBurgers(state => [...state, newBurger.burger]);
            navigate('/burgers');
        }catch(err){
            err.message === 'Burger name already in the Database!' ? setBurgerNameTaken(true) : setBurgerNameTaken(false);
            err.message === 'NetworkError when attempting to fetch resource.' ? setBurgerServerOffline(true) : setBurgerServerOffline(false);
            removeMessage();
        };
    };

    const [deleteNoOwner, setDeleteNoOwner] = useState(false);
    const onDeleteBurger = async (burgerId, ownerId) => {
        if(ownerId === auth.user._id){
            burgerService.deleteBurger(burgerId).then(() => {
                setDeleteNoOwner(false);
                setBurgers(state => state.filter(x => x._id !== burgerId));
            }).catch(() => {
                return;
            });
        }else{
            setDeleteNoOwner(true);
        };
    };

    const onLikeBurger = async (burgerId, userId) => {
        burgerService.likeBurger(burgerId, userId).then(() => {
            setBurgers(state => state.map(x => x._id === burgerId ? {...x, likes: [...x.likes, userId]} : x));
        }).catch(() => {
            return;
        });
    };

    const onUnlikeBurger = async (burgerId, userId) => {
        burgerService.unlikeBurger(burgerId, userId).then(() => {
            setBurgers(state => state.map(x => x._id === burgerId ? {...x, likes: x.likes.filter(x => x !== userId)} : x))
        }).catch(() => {
            return;
        });
    };

    function removeMessage(){
        setTimeout(() => {
            setBurgerFormFieldsErros(false);
            setBurgerNameTaken(false);
            setBurgerServerOffline(false);
        }, 5000);
    };


    const context = {
        errorFetchingBurgersData,
        burgers,
        burgerFormFieldsError,
        burgerNameTaken,
        burgerServerOffline,
        onBurgerCreateFormSubmit,
        deleteNoOwner,
        onDeleteBurger,
        onLikeBurger,
        onUnlikeBurger
    };

    return (
        <>
            <BurgerContext.Provider value={context}>
                <Outlet/>
            </BurgerContext.Provider>
        </>
    );
};

export const useBurgerContext = () => {
    const context = useContext(BurgerContext);
    return context;
};