import { useContext } from "react"
import { ApplicationContext } from "../../contexts/ApplicationContext"
import { Navigate, Outlet } from "react-router-dom";

export const RouteGuardAuthenitcated =  ({
    children
}) => {
    const { isAuthenticated } = useContext(ApplicationContext);
    if(!isAuthenticated){
        return <Navigate to="/auth/login"></Navigate>;
    };
    return children ? children : <Outlet/>
};