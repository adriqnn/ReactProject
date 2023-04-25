import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import './Register.css';

export const Register = () => {
    const { registerFieldsError, registerUsernameTaken, registerEmailTaken, registerPasswordsMustMatch, registerServerOffline, onRegisterFormSubmit } = useContext(ApplicationContext);

    const initialFormValues = { username: "", email: "", password: "", repass: "" };
    const [formValues, setFormValues] = useState(initialFormValues);
    const initialErrorValues = { usernameRequired: false, usernameMinLength: false, emailRequired: false, emailMinLength: false, emailIsNotValid: false, passwordRequired: false, passwordMinLength: false, passwordMatch: false };
    const changeFormErrors = { usernameRequired: false, usernameMinLength: false, emailRequired: false, emailMinLength: false, emailIsNotValid: false, passwordRequired: false, passwordMinLength: false, passwordMatch: false };
    const [formErrors, setFormErrors] = useState(initialErrorValues);
    const [fillTheFormProperly, setFillTheFormProperly] = useState(false);

    const onUsernameChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.username === '' ? changeFormErrors.usernameRequired = true : changeFormErrors.usernameRequired = false;
        formValues.username.length < 3 ? changeFormErrors.usernameMinLength = true : changeFormErrors.usernameMinLength = false;
        setFormErrors(state => ({...state, usernameRequired: changeFormErrors.usernameRequired, usernameMinLength: changeFormErrors.usernameMinLength}));
    };

    const onEmailChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.email === '' ? changeFormErrors.emailRequired = true : changeFormErrors.emailRequired = false;
        formValues.email.length < 3 ? changeFormErrors.emailMinLength = true : changeFormErrors.emailMinLength = false;
        !formValues.email.includes('@') ? changeFormErrors.emailIsNotValid = true : changeFormErrors.emailIsNotValid = false;
        setFormErrors(state => ({...state, emailRequired: changeFormErrors.emailRequired, emailMinLength: changeFormErrors.emailMinLength, emailIsNotValid: changeFormErrors.emailIsNotValid}));
    };

    const onPasswordChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.password === '' ? changeFormErrors.passwordRequired = true : changeFormErrors.passwordRequired = false;
        formValues.password.length < 3 ? changeFormErrors.passwordMinLength = true : changeFormErrors.passwordMinLength = false;
        !(formValues.password === formValues.repass) ? changeFormErrors.passwordMatch = true : changeFormErrors.passwordMatch = false;
        setFormErrors(state => ({...state, passwordRequired: changeFormErrors.passwordRequired, passwordMinLength: changeFormErrors.passwordMinLength, passwordMatch: changeFormErrors.passwordMatch}));
    };

    const onRePassChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        !(formValues.password === formValues.repass) ? changeFormErrors.passwordMatch = true : changeFormErrors.passwordMatch = false;
        setFormErrors(state => ({...state, passwordMatch: changeFormErrors.passwordMatch}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(Object.values(formErrors).filter(x => x === true).length > 0){
            setFillTheFormProperly(true);
            removeMessage();
        }else{
            onRegisterFormSubmit(formValues);
            setFormValues(initialFormValues);
        };
    };

    function removeMessage() {
        setTimeout(() => {
            setFillTheFormProperly(false);
        }, 5000);
    };

    return (
        <main className="register-main" id="register-main">
            <section className="register-page-container">
                <div className="register-page">
                    <div className="register-page-heading">
                        <h1 className="register-page-h1">Sign Up!</h1>
                        <p className="register-page-line"></p>
                    </div>
                    <div className="register-page-form-container">
                        <form method="POST" onSubmit={onSubmit} className="register-page-form">
                            <div className="register-page-form-server-errors">
                                {
                                    registerFieldsError && (
                                        <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">All fields are required!</label>
                                    </div>
                                    )
                                }
                                {
                                    registerUsernameTaken && (
                                        <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">Username is taken!</label>
                                    </div>
                                    )
                                }
                                {
                                    registerEmailTaken && (
                                        <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">Email is taken!</label>
                                    </div>
                                    )
                                }
                                {
                                    registerPasswordsMustMatch && (
                                        <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">Passwords must match!</label>
                                    </div>
                                    )
                                }
                                {
                                    registerServerOffline && (
                                        <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">Please try again later!</label>
                                    </div>
                                    )
                                }
                                {
                                    fillTheFormProperly && (
                                        <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">Fill the form properly!</label>
                                    </div>
                                    )
                                }
                            </div>
                            <div className="register-form-group">
                                <label htmlFor="username" className="register-form-group-label">Username</label>
                                <input type="text" className={`form-control register-form-group-input ${formErrors.usernameRequired ? "errorred" : ""} ${formErrors.usernameMinLength ? "errorred" : ""}`} id="username" placeholder="Username" 
                                    name="username" value={formValues.username} onChange={onUsernameChangeHandler} onBlur={onUsernameChangeHandler}/>
                                <i className="fas fa-user register-form-group-i"></i>
                            </div>
                            {
                                (formErrors.usernameRequired || formErrors.usernameMinLength) && (
                                    <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">Username is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            <div className="register-form-group">
                                <label htmlFor="email" className="register-form-group-label">Email</label>
                                <input type="text" className={`form-control register-form-group-input ${formErrors.emailRequired ? "errorred" : ""} ${formErrors.emailMinLength ? "errorred" : ""} ${formErrors.emailIsNotValid ? "errorred" : ""}`} id="email" placeholder="Email" 
                                    name="email" value={formValues.email} onChange={onEmailChangeHandler} onBlur={onEmailChangeHandler}/>
                                <i className="fas fa-envelope register-form-group-i"></i>
                            </div>
                            {
                                (formErrors.emailRequired || formErrors.emailMinLength) && (
                                    <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">Email is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            {
                                formErrors.emailIsNotValid && (
                                    <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">Email is not valid!</label>
                                    </div>
                                )
                            }
                            <div className="register-form-group">
                                <label htmlFor="password" className="register-form-group-label">Password</label>
                                <input type="password" className={`form-control register-form-group-input ${(formErrors.passwordRequired || formErrors.passwordMinLength) ? "errorred" : ""}`} id="password" placeholder="Password" 
                                    name="password" value={formValues.password} onChange={onPasswordChangeHandler} onBlur={onPasswordChangeHandler}/>
                                <i className="fas fa-lock register-form-group-i"></i>
                            </div>
                            {
                                (formErrors.passwordRequired || formErrors.passwordMinLength) && (
                                    <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">Password is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            <div className="register-form-group">
                                <label htmlFor="rePassword" className="register-form-group-label">Confirm Password</label>
                                <input type="password" className={`form-control register-form-group-input ${formErrors.passwordMatch ? "errorred" : ""}`} id="rePassword" placeholder="Confirm Password" 
                                name="repass" value={formValues.repass} onChange={onRePassChangeHandler} onBlur={onRePassChangeHandler}/>
                                <i className="fas fa-lock register-form-group-i"></i>
                            </div>
                            {
                                formErrors.passwordMatch && (
                                    <div className="register-form-group">
                                        <label htmlFor="error" className="register-form-group-error-message">Passwords must match!</label>
                                    </div>
                                )
                            }
                            <div className="register-form-group-login">
                                <p>Already have account? - <Link to="/auth/login" className="register-form-group-login-link">Sign In now!</Link></p>
                            </div>
                            <button type="submit" className="register-form-group-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};