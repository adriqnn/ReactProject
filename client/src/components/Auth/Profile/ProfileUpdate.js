import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import './ProfileUpdate.css';

export const ProfileUpdate = () => {
    const { updateFieldsError, updateUsernameTaken, updateEmailTaken, updatePasswordsMustMatch, updateServerOffline, onUpdateFormSubmit, auth } = useContext(ApplicationContext);

    const initialFormValues = { username: auth.user.username, email: auth.user.email, password: "", repass: "" };
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
            onUpdateFormSubmit(formValues);
            setFormValues(initialFormValues);
        };
    };

    function removeMessage() {
        setTimeout(() => {
            setFillTheFormProperly(false);
        }, 5000);
    };

    return (
        <main>
            <section className="py-5" id="register-page">
                <div className="container">
                    <h1 style={{fontFamily: "cursive"}}>
                        <p style={{fontSize: "36px", fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</p>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Register...</p>
                        <p> </p>
                        <p className="line"></p>
                    </h1>
                    <p>&nbsp;</p>
                    <div className="register">
                        <form method="POST" onSubmit={onSubmit}>
                            {
                                updateFieldsError && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>All fields are required!</label>
                                </div>
                                )
                            }
                            {
                                updateUsernameTaken && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Username is taken!</label>
                                </div>
                                )
                            }
                            {
                                updateEmailTaken && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Email is taken!</label>
                                </div>
                                )
                            }
                             {
                                updatePasswordsMustMatch && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Passwords must match!</label>
                                </div>
                                )
                            }
                            {
                                updateServerOffline && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Please try again later!</label>
                                </div>
                                )
                            }
                            {
                                fillTheFormProperly && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Fill the form properly!</label>
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
                                <label htmlFor="email">Email</label>
                                <input type="text" className={`form-control ${formErrors.emailRequired ? "errorred" : ""} ${formErrors.emailMinLength ? "errorred" : ""} ${formErrors.emailIsNotValid ? "errorred" : ""}`} id="email" placeholder="Email" 
                                    name="email" value={formValues.email} onChange={onEmailChangeHandler} onBlur={onEmailChangeHandler}/>
                            </div>
                            {
                                (formErrors.emailRequired || formErrors.emailMinLength) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Email is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            {
                                formErrors.emailIsNotValid && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Email is not valid!</label>
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
                                <label htmlFor="rePassword">Confirm Password</label>
                                <input type="password" className={`form-control ${formErrors.passwordMatch ? "errorred" : ""}`} id="rePassword" placeholder="Confirm Password" 
                                name="repass" value={formValues.repass} onChange={onRePassChangeHandler} onBlur={onRePassChangeHandler}/>
                            </div>
                            {
                                formErrors.passwordMatch && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Passwords must match!</label>
                                    </div>
                                )
                            }
                            <div className="form-group">
                                <p>Go Back to <Link to="/auth/profile" style={{fontSize: "20px", color: "greenyellow"}}>Profile!</Link></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};