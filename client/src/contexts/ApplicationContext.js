import { createContext, useState } from "react";
import { authServiceFactory } from "../services/authService";
import { useNavigate } from "react-router-dom";
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

    const [loginFieldsError, setLoginFieldsError] = useState(false);
    const [loginWrongUsernameOrPassowrd, setLoginWrongUsernameOrPassowrd] = useState(false);
    const onLoginFormSubmit = async (loginData) => {
        const username = loginData.username;
        const password = loginData.password;

        if(username === '' || password === ''){
            setLoginFieldsError(true);
            return;
        }else{
            setLoginFieldsError(false);
        };

        try{
            const result = await authService.login(loginData);
            setAuth(result);
            navigate('/');
        }catch(err){
            err.message === 'Incorrect username or password!' ? setLoginWrongUsernameOrPassowrd(true) : setLoginWrongUsernameOrPassowrd(false);
        }

    }

    const onLogout = async () => {
        const result = authService.logout();
        setAuth({});
        console.log(result);
    }

    const context = {
        auth,
        registerFieldsError,
        registerUsernameTaken,
        registerEmailTaken,
        onRegisterFormSubmit,
        loginFieldsError,
        loginWrongUsernameOrPassowrd,
        onLoginFormSubmit,
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

// export const useApplicationContext = () => {
//     const context = useContext(ApplicationContext);
//     return context;
// };
