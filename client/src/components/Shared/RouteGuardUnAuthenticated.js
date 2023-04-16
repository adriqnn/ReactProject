import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { ApplicationContext } from "../../contexts/ApplicationContext";

export const RouteGuardUnAuthenitcated =  () => {
    const { isAuthenticated } = useContext(ApplicationContext);

    if(isAuthenticated){
        return <Navigate to="/"></Navigate>;
    };
    
    return <Outlet/>;
};