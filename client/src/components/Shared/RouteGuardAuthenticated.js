import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { ApplicationContext } from "../../contexts/ApplicationContext";

export const RouteGuardAuthenitcated =  () => {
    const { isAuthenticated } = useContext(ApplicationContext);

    if(!isAuthenticated){
        return <Navigate to="/auth/login"></Navigate>;
    };

    return <Outlet/>;
};