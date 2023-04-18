import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { RestaurantContext } from "../../../contexts/RestaurantContext";
import './Restaurant-Update.css';

export const RestaurantUpdate = () => {
    const { restaurantId } = useParams();
    const { updateRestaurantFormFieldsError, updateRestaurantServerOffline, onRestaurantUpdateFormSubmit, getRestaurantById } = useContext(RestaurantContext);

    const [restaurantById, setRestaurantById] = useState(getRestaurantById(restaurantId));

    const initialFormValues = { name: restaurantById?.name || '', address: restaurantById?.address || '', description: restaurantById?.description || '', rating: restaurantById?.rating || '' };
    const [formValues, setFormValues] = useState(initialFormValues);
    const initialErrorValues = { nameRequired: false, nameMinLength: false, addressRequired: false, addressMinLength: false, descriptionRequired: false, descriptionMinLength: false, ratingRequired: false, raitingLowestValue: false};
    const changeFormErrors = { nameRequired: false, nameMinLength: false, addressRequired: false, addressMinLength: false, descriptionRequired: false, descriptionMinLength: false, ratingRequired: false, raitingLowestValue: false};
    const [formErrors, setFormErrors] = useState(initialErrorValues);
    const [fillTheFormProperly, setFillTheFormProperly] = useState(false);

    const onNameChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.name === '' ? changeFormErrors.nameRequired = true : changeFormErrors.nameRequired = false;
        formValues.name.length < 3 ? changeFormErrors.nameMinLength = true : changeFormErrors.nameMinLength = false;
        setFormErrors(state => ({...state, nameRequired: changeFormErrors.nameRequired, nameMinLength: changeFormErrors.nameMinLength}));
    };

    const onAddressChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.address === '' ? changeFormErrors.addressRequired = true : changeFormErrors.addressRequired = false;
        formValues.address.length < 3 ? changeFormErrors.addressMinLength = true : changeFormErrors.addressMinLength = false;
        setFormErrors(state => ({...state, addressRequired: changeFormErrors.addressRequired, addressMinLength: changeFormErrors.addressMinLength}));
    };

    const onDescriptionChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.description === '' ? changeFormErrors.descriptionRequired = true : changeFormErrors.descriptionRequired = false;
        formValues.description.length < 3 ? changeFormErrors.descriptionMinLength = true : changeFormErrors.descriptionMinLength = false;
        setFormErrors(state => ({...state, descriptionRequired: changeFormErrors.descriptionRequired, descriptionMinLength: changeFormErrors.descriptionMinLength}));
    };

    const onRatingChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.rating === '' ? changeFormErrors.ratingRequired = true : changeFormErrors.ratingRequired = false;
        Number(formValues.rating) < 0 ? changeFormErrors.raitingLowestValue = true : changeFormErrors.descraitingLowestValueriptionMinLength = false;
        setFormErrors(state => ({...state, ratingRequired: changeFormErrors.ratingRequired, raitingLowestValue: changeFormErrors.raitingLowestValue}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(Object.values(formErrors).filter(x => x === true).length > 0){
            setFillTheFormProperly(true);
            removeMessage();
        }else{
            onRestaurantUpdateFormSubmit(formValues, restaurantId);
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
                <div className="container register-page">
                    <h1 style={{fontFamily: "cursive"}}>
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Update Restaurant...</p>
                        <p> </p>
                        <p className="line"></p>
                    </h1>
                    <p>&nbsp;</p>
                    <div className="register">
                        <form method="POST" onSubmit={onSubmit}>
                            {
                                updateRestaurantFormFieldsError && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>All fields are required!</label>
                                </div>
                                )
                            }
                            {
                                updateRestaurantServerOffline && (
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
                                <label htmlFor="name">Name</label>
                                <input type="text" className={`form-control ${formErrors.nameRequired ? "errorred" : ""} ${formErrors.nameMinLength ? "errorred" : ""}`} id="name" placeholder="Name" 
                                    name="name" value={formValues.name} onChange={onNameChangeHandler} onBlur={onNameChangeHandler}/>
                            </div>
                            {
                                (formErrors.nameRequired || formErrors.nameMinLength) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Name is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" className={`form-control ${formErrors.addressRequired ? "errorred" : ""} ${formErrors.addressMinLength ? "errorred" : ""}`} id="address" placeholder="Address" 
                                    name="address" value={formValues.address} onChange={onAddressChangeHandler} onBlur={onAddressChangeHandler}/>
                            </div>
                            {
                                (formErrors.addressRequired || formErrors.addressMinLength) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Address is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" className={`form-control ${(formErrors.descriptionRequired || formErrors.descriptionMinLength) ? "errorred" : ""}`} id="description" placeholder="Description" 
                                    name="description" value={formValues.description} onChange={onDescriptionChangeHandler} onBlur={onDescriptionChangeHandler}/>
                            </div>
                            {
                                (formErrors.descriptionRequired || formErrors.descriptionMinLength) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Description is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <input type="number" className={`form-control ${(formErrors.ratingRequired || formErrors.raitingLowestValue) ? "errorred" : ""}`} id="rating" placeholder="Rating" 
                                    name="rating" value={formValues.rating} onChange={onRatingChangeHandler} onBlur={onRatingChangeHandler}/>
                            </div>
                            {
                                (formErrors.ratingRequired || formErrors.raitingLowestValue) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Description is required and must be a positive number!</label>
                                    </div>
                                )
                            }
                            <div className="form-group">
                                <p>Go back to restaurants...<Link to="/restaurants" style={{fontSize: "20px", color: "greenyellow"}}>Here!</Link></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};