import { createContext, useContext } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({
    children,
}) => {
    const context = {

    };

    return (
        <>
            <ApplicationContext.Provider value={context}>
                {children}
            </ApplicationContext.Provider>
        </>
    );
};

// export const useApplicationContext = () => {
//     const context = useContext(ApplicationContext);
//     return context;
// };
