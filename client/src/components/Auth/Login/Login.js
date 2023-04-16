import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ApplicationContext } from '../../../contexts/ApplicationContext';

export const Login = () => {
    const { loginFieldsError, loginWrongUsernameOrPassowrd, loginServerOffline, onLoginFormSubmit } = useContext(ApplicationContext);

    const initialFormValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialFormValues);
    const initialErrorValues = { usernameRequired: false, usernameMinLength: false, passwordRequired: false, passwordMinLength: false };
    const changeFormErrors = { usernameRequired: false, usernameMinLength: false, passwordRequired: false, passwordMinLength: false };
    const [formErrors, setFormErrors] = useState(initialErrorValues);

    const onUsernameChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.username === '' ? changeFormErrors.usernameRequired = true : changeFormErrors.usernameRequired = false;
        formValues.username.length < 3 ? changeFormErrors.usernameMinLength = true : changeFormErrors.usernameMinLength = false;
        setFormErrors(state => ({...state, usernameRequired: changeFormErrors.usernameRequired, usernameMinLength: changeFormErrors.usernameMinLength}));
    };

    const onPasswordChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.password === '' ? changeFormErrors.passwordRequired = true : changeFormErrors.passwordRequired = false;
        formValues.password.length < 3 ? changeFormErrors.passwordMinLength = true : changeFormErrors.passwordMinLength = false;
        setFormErrors(state => ({...state, passwordRequired: changeFormErrors.passwordRequired, passwordMinLength: changeFormErrors.passwordMinLength}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onLoginFormSubmit(formValues);
        setFormValues(initialFormValues);
    };
 
    return (
        <main>
            <section className="py-5" id="login-page">
                <div className="container login-page">
                    <h1 style={{fontFamily: "cursive"}}>
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Login...</p>
                        <p> </p>
                        <p className="line"></p>
                    </h1>
                    <p>&nbsp;</p>
                    <div className="login">
                        <form method="POST" onSubmit={onSubmit}>
                            {
                                loginFieldsError && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>All fields are required!</label>
                                </div>
                                )
                            }
                            {
                                loginWrongUsernameOrPassowrd && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Incorrect username or password!</label>
                                </div>
                                )
                            }
                            {
                                loginServerOffline && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Please try again later!</label>
                                </div>
                                )
                            }
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className={`form-control ${formErrors.usernameRequired ? "errorred" : ""} ${formErrors.usernameMinLength ? "errorred" : ""}`} id="username" placeholder="Username" 
                                    name="username" value={formValues.username} onChange={onUsernameChangeHandler} onBlur={onUsernameChangeHandler}/>
                            </div>
                            {
                                (formErrors.usernameRequired || formErrors.usernameMinLength) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Username is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className={`form-control ${(formErrors.passwordRequired || formErrors.passwordMinLength) ? "errorred" : ""}`} id="password" placeholder="Password" 
                                name="password" value={formValues.password} onChange={onPasswordChangeHandler} onBlur={onPasswordChangeHandler}/>
                            </div>
                            {
                                (formErrors.passwordRequired || formErrors.passwordMinLength) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Password is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            <div className="form-group">
                                <p>Not registered yet? <Link to="/auth/register" style={{fontSize: "20px", color: "greenyellow"}}>Register Now!</Link></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};