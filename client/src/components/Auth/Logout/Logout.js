import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";

export const Logout = () => {
    const { onLogout } = useContext(ApplicationContext);

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Navigate to="/"/>
};