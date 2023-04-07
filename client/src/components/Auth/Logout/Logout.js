import { useContext, useEffect } from "react";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { Navigate } from "react-router-dom";

export const Logout = () => {
    const { onLogout } = useContext(ApplicationContext);

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Navigate to="/"/>
};