import { createContext, useContext } from "react";

export const BurgerContext = createContext();

export const BurgerProvider = ({
    children,
}) => {

    const context = {

    };

    return (
        <>
            <BurgerContext.Provider value={context}>
                {children}
            </BurgerContext.Provider>
        </>
    );
};

export const useBurgerContext = () => {
    const context = useContext(BurgerContext);
    return context;
};