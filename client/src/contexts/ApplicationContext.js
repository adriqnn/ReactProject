import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from "../services/authService";
import { useLocalStorageSetter } from "../hooks/useLocalStorageSetter";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorageSetter('auth', {});
    const authService = authServiceFactory(auth.token);
    
    const [registerFieldsError, setRegisterFieldsError] = useState(false);
    const [registerUsernameTaken, setRegisterUsernameTaken] = useState(false);
    const [registerEmailTaken, setRegisterEmailTaken] = useState(false);
    const onRegisterFormSubmit = async (registerData) => {
        const username = registerData.username;
        const email = registerData.email;
        const password = registerData.password;
        const repass = registerData.repass;

        if(username === '' || email === '' || password === '' || repass === ''){
            setRegisterFieldsError(true);
            return;
        }else{
            setRegisterFieldsError(false);
        };

        try{
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/');
        }catch(err){
            err.message === 'Username is taken!' ? setRegisterUsernameTaken(true) : setRegisterUsernameTaken(false);
            err.message === 'Email is taken!' ? setRegisterEmailTaken(true) : setRegisterEmailTaken(false);
        };
    };

    const [updateFieldsError, setUpdateFieldsError] = useState(false);
    const [updateUsernameTaken, setUpdateUsernameTaken] = useState(false);
    const [updateEmailTaken, setUpdateEmailTaken] = useState(false);
    const onUpdateFormSubmit = async (registerData) => {
        const username = registerData.username;
        const email = registerData.email;
        const password = registerData.password;
        const repass = registerData.repass;

        if(username === '' || email === '' || password === '' || repass === ''){
            setUpdateFieldsError(true);
            return;
        }else{
            setUpdateFieldsError(false);
        };

        try{
            await authService.update({...registerData, owner: auth.user._id});
            onLogout();
            navigate('/auth/login');
        }catch(err){
            err.message === 'Username is taken!' ? setUpdateUsernameTaken(true) : setUpdateUsernameTaken(false);
            err.message === 'Email is taken!' ? setUpdateEmailTaken(true) : setUpdateEmailTaken(false);
        };
    };

    const [loginFieldsError, setLoginFieldsError] = useState(false);
    const [loginWrongUsernameOrPassowrd, setLoginWrongUsernameOrPassowrd] = useState(false);
    const [loginServerOffline, setLoginServerOffline] = useState(false);
    const onLoginFormSubmit = async (loginData) => {
        const username = loginData.username;
        const password = loginData.password;

        if(username === '' || password === ''){
            setLoginFieldsError(true);
            removeMessage();
            return;
        };

        try{
            const result = await authService.login(loginData);
            setAuth(result);
            navigate('/');
        }catch(err){
            err.message === 'Incorrect username or password!' ? setLoginWrongUsernameOrPassowrd(true) : setLoginWrongUsernameOrPassowrd(false);
            err.message === 'NetworkError when attempting to fetch resource.' ? setLoginServerOffline(true) : setLoginServerOffline(false);
            removeMessage();
        };
    };

    const onLogout = async () => {
        setAuth({});
        authService.logout();
    };

    function removeMessage(){
        setTimeout(() => {
            setLoginFieldsError(false);
            setLoginWrongUsernameOrPassowrd(false);
            setLoginServerOffline(false);
        }, 5000);
    };

    const context = {
        auth,
        registerFieldsError,
        registerUsernameTaken,
        registerEmailTaken,
        onRegisterFormSubmit,
        loginFieldsError,
        loginWrongUsernameOrPassowrd,
        loginServerOffline,
        onLoginFormSubmit,
        updateFieldsError,
        updateUsernameTaken,
        updateEmailTaken,
        onUpdateFormSubmit,
        isAuthenticated: !!auth.token,
        onLogout,
    };

    return (
        <>
            <ApplicationContext.Provider value={context}>
                {children}
            </ApplicationContext.Provider>
        </>
    );
};

export const useApplicationContext = () => {
    const context = useContext(ApplicationContext);
    return context;
};
