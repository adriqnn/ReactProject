import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const context = {

    };

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

// export const useApplicationContext = () => {
//     const context = useContext(ApplicationContext);
//     return context;
// };
