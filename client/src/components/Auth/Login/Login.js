import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ApplicationContext } from '../../../contexts/ApplicationContext';
import './Login.css';

export const Login = () => {
    const { loginFieldsError, loginWrongUsernameOrPassowrd, loginServerOffline, onLoginFormSubmit } = useContext(ApplicationContext);

    const initialFormValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialFormValues);
    const initialErrorValues = { usernameRequired: false, usernameMinLength: false, passwordRequired: false, passwordMinLength: false };
    const changeFormErrors = { usernameRequired: false, usernameMinLength: false, passwordRequired: false, passwordMinLength: false };
    const [formErrors, setFormErrors] = useState(initialErrorValues);
    const [fillTheFormProperly, setFillTheFormProperly] = useState(false);

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
        if(Object.values(formErrors).filter(x => x === true).length > 0){
            setFillTheFormProperly(true);
            removeMessage();
        }else{
            onLoginFormSubmit(formValues);
            setFormValues(initialFormValues);
        };
    };

    function removeMessage() {
        setTimeout(() => {
            setFillTheFormProperly(false);
        }, 5000);
    };
 
    return (
        <main className="login-main" id="login-main">
            <section className="login-page-container">
                <div className="login-page">
                    <div className='login-page-heading'>
                        <h1 className='login-page-h1'>Login</h1>
                        <p className="login-page-line"></p>
                    </div>
                    <div className="login-page-form-container">
                        <form method="POST" onSubmit={onSubmit} className='login-page-form'>
                            <div className="login-page-form-server-errors">
                                {
                                    loginFieldsError && (
                                        <div className="login-form-group">
                                        <label htmlFor="error" className="login-form-group-error-message">All fields are required!</label>
                                    </div>
                                    )
                                }
                                {
                                    loginWrongUsernameOrPassowrd && (
                                        <div className="login-form-group">
                                        <label htmlFor="error" className="login-form-group-error-message">Incorrect username or password!</label>
                                    </div>
                                    )
                                }
                                {
                                    loginServerOffline && (
                                        <div className="login-form-group">
                                        <label htmlFor="error" className="login-form-group-error-message">Please try again later!</label>
                                    </div>
                                    )
                                }
                                {
                                    fillTheFormProperly && (
                                        <div className="login-form-group">
                                        <label htmlFor="error" className="login-form-group-error-message">Fill the form properly!</label>
                                    </div>
                                    )
                                }
                            </div>
                            <div className="login-form-group">
                                <label htmlFor="username" className="login-form-group-label">Username:</label>
                                <input type="text" className={`form-control login-form-group-input ${formErrors.usernameRequired ? "errorred" : ""} ${formErrors.usernameMinLength ? "errorred" : ""}`} id="username" placeholder="Username" 
                                    name="username" value={formValues.username} onChange={onUsernameChangeHandler} onBlur={onUsernameChangeHandler}/>
                                <i className="fas fa-user login-form-group-i"></i>
                            </div>
                            {
                                (formErrors.usernameRequired || formErrors.usernameMinLength) && (
                                    <div className="login-form-group">
                                        <label htmlFor="error" className="login-form-group-error-message">Username is required and must be at least 3 characters long!</label>
                                    </div>
                                )
                            }
                            <div className="login-form-group">
                                <label htmlFor="password" className="login-form-group-label">Password:</label>
                                <input type="password" className={`form-control login-form-group-input ${(formErrors.passwordRequired || formErrors.passwordMinLength) ? "errorred" : ""}`} id="password" placeholder="Password" 
                                    name="password" value={formValues.password} onChange={onPasswordChangeHandler} onBlur={onPasswordChangeHandler}/>
                                <i className="fas fa-lock login-form-group-i"></i>
                            </div>
                            {
                                (formErrors.passwordRequired || formErrors.passwordMinLength) && (
                                    <div className="login-form-group">
                                        <label htmlFor="error" className="login-form-group-error-message">Password is required and must be at least 3 characters long!</label>
                                    </div>
                                )
                            }
                            <div className="login-form-group-register">
                                <p>Not registered yet? - <Link to="/auth/register" className='login-form-group-register-link'>Register Now!</Link></p>
                            </div>
                            <button type="submit" className="login-form-group-btn">Sign In</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};