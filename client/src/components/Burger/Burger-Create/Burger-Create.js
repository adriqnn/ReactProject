import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { BurgerContext } from "../../../contexts/BurgerContext";
import './Burger-Create.css';

export const BurgerCreate = () => {
    const { burgerFormFieldsError, burgerNameTaken, burgerServerOffline, onBurgerCreateFormSubmit } = useContext(BurgerContext);

    const initialFormValues = { name: "", weight: "", description: "", bun: "", mayonnaise: "", ketchup: "", burgersauce: "", mustard: "", 
    emental: "", gouda: "", cheddar:  "", beef: "", chicken: "", fish: "", bacon: "", pepperoni: "", tomatoes: "", mushrooms: "",
    pickles: "", lettuce: "", greenpepper: "", onions: "", caramelizedonions: "", friedonions: "", flakysalt: "", blackpepper: "",
    garlicpowder: "", egg: "" };
    const [formValues, setFormValues] = useState(initialFormValues);
    const initiaErrorValues = { burgerNameRequired: false, burgerNameLength: false, burgerWeightRequired: false, burgerWeightGramsFive: false, burgerDescriptionRequired: false, burgerDescriptionLenght: false };
    const changeFormErrors = { burgerNameRequired: false, burgerNameLength: false, burgerWeightRequired: false, burgerWeightGramsFive: false, burgerDescriptionRequired: false, burgerDescriptionLenght: false };
    const [formErrors, setFormErrors] = useState(initiaErrorValues);
    const [fillTheFormProperly, setFillTheFormProperly] = useState(false);

    const onNameChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.name === '' ? changeFormErrors.burgerNameRequired = true : changeFormErrors.burgerNameRequired = false;
        formValues.name.length < 3 ? changeFormErrors.burgerNameLength = true : changeFormErrors.burgerNameLength = false;
        setFormErrors(state => ({...state, burgerNameRequired: changeFormErrors.burgerNameRequired, burgerNameLength: changeFormErrors.burgerNameLength}));
    };

    const onWeightChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.weight === '' ? changeFormErrors.burgerWeightRequired = true : changeFormErrors.burgerWeightRequired = false;
        Number(formValues.weight) < 5 ? changeFormErrors.burgerWeightGramsFive = true : changeFormErrors.burgerWeightGramsFive = false;
        setFormErrors(state => ({...state, burgerWeightRequired: changeFormErrors.burgerWeightRequired, burgerWeightGramsFive: changeFormErrors.burgerWeightGramsFive}));
    };

    const onDescriptionChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.description === '' ? changeFormErrors.burgerDescriptionRequired = true : changeFormErrors.burgerDescriptionRequired = false;
        formValues.description.length < 3 ? changeFormErrors.burgerDescriptionLenght = true : changeFormErrors.burgerDescriptionLenght = false;
        setFormErrors(state => ({...state, burgerDescriptionRequired: changeFormErrors.burgerDescriptionRequired, burgerDescriptionLenght: changeFormErrors.burgerDescriptionLenght}));
    };

    const onOtherChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(Object.values(formErrors).filter(x => x === true).length > 0){
            setFillTheFormProperly(true);
            removeMessage();
        }else{
            onBurgerCreateFormSubmit(formValues);
            // setFormValues(initialFormValues);
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
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Create a Burger here!</p>
                        <p> </p>
                        <p className="line"></p>
                    </h1>
                    <div className="register">
                        <form method="POST" onSubmit={onSubmit}>
                            {
                                burgerFormFieldsError && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Please fill out name, weight, description and bun!</label>
                                    </div>
                                )
                            }
                            {
                                burgerNameTaken && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Burger name already in the Database!</label>
                                </div>
                                )
                            }
                            {
                                burgerServerOffline && (
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
                                <label htmlFor="name">Burger Name</label>
                                <input type="text" className={`form-control ${formErrors.burgerNameRequired ? "errorred" : ""} ${formErrors.burgerNameLength ? "errorred" : "" }`} id="name" placeholder="Burger Name" 
                                    name="name" value={formValues.name} onChange={onNameChangeHandler} onBlur={onNameChangeHandler}/>
                            </div>
                            {
                                (formErrors.burgerNameRequired || formErrors.burgerNameLength) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Burger name is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            <div className="form-group">
                                <label htmlFor="weight">Burger Weight</label>
                                <input type="number" className={`form-control ${formErrors.burgerWeightRequired ? "errorred" : ""} ${formErrors.burgerWeightGramsFive ? "errorred" : ""}`} id="weight" placeholder="Burger Weight" 
                                    name="weight" value={formValues.weight} onChange={onWeightChangeHandler} onBlur={onWeightChangeHandler}/>
                            </div>
                            {
                                (formErrors.burgerWeightRequired || formErrors.burgerWeightGramsFive) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Burger weight is required and must be at least 5 grams!</label>
                                     </div>
                                )
                            }
                            <div className="form-group">
                                <label htmlFor="description">Burger Description</label>
                                <input type="text" className={`form-control ${formErrors.burgerDescriptionRequired ? "errorred" : ""} ${formErrors.burgerDescriptionLenght ? "errorred" : ""}`} id="description" placeholder="Burger Description" 
                                    name="description" value={formValues.description} onChange={onDescriptionChangeHandler} onBlur={onDescriptionChangeHandler}/>
                            </div>
                            {
                                (formErrors.burgerDescriptionRequired || formErrors.burgerDescriptionLenght) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Burger description is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }
                            <label>Bun</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="radio" id="regularbun" name="bun" value="Regular Bun" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="regularbun">Regular Bun</label>
                                    <input type="radio" id="sesameseedbun" name="bun" value="Sesame Seed Bun" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="sesameseedbun">Sesame Seed Bun</label>    
                                </div>
                                <div>
                                    <input type="radio" id="briochebun" name="bun" value="Brioche Bun" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="briochebun" style={{paddingRight: "140px"}}>Brioche Bun</label>
                                </div>
                            </div>
                            <label>Sauce</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="checkbox" id="mayonnaise" value="mayonnaise" name="mayonnaise" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="mayonnaise">Mayonanaise</label>
                                    <input type="checkbox" id="ketchup" value="ketchup" name="ketchup" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="ketchup">Ketchup</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="burgersauce" value="burgersauce" name="burgersauce" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="burgersauce">Burger Sauce</label> 
                                    <input type="checkbox" id="mustard" value="mustard" name="mustard" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="mustard">Mustard</label>
                                </div>
                            </div>
                            <label>Cheese</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="checkbox" id="emental" value="emental" name="emental" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="emental" style={{paddingRight: "40px"}}>Emental</label>
                                    <input type="checkbox" id="gouda" value="gouda" name="gouda" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="gouda">Gouda</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="cheddar" value="cheddar" name="cheddar" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="cheddar" style={{paddingRight: "100px"}}>Cheddar</label> 
                                </div>
                            </div>
                            <label>Meat</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingRight: "5px", paddingLeft: "15px"}}>
                                    <input type="checkbox" id="beef" value="beef" name="beef" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="beef" style={{paddingRight: "60px"}}>Beef</label>
                                    <input type="checkbox" id="chicken" value="chicken" name="chicken" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="chicken">Chicken</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="fish" value="fish" name="fish" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="fish" style={{paddingRight: "65px"}}>Fish</label> 
                                    <input type="checkbox" id="bacon" value="bacon" name="bacon" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="bacon">Bacon</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="pepperoni" value="pepperoni" name="pepperoni" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="pepperoni" style={{paddingRight: "80px"}}>Pepperoni</label>
                                </div>
                            </div>
                            <label>Vegetables</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingLeft: "0px", paddingRight: "10px"}}>
                                    <input type="checkbox" id="tomatoes" value="tomatoes" name="tomatoes" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="tomatoes" style={{paddingRight: "75px"}}>Tomatoes</label>
                                    <input type="checkbox" id="mushrooms" value="mushrooms" name="mushrooms" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="mushrooms">Mushrooms</label>    
                                </div>
                                <div style={{paddingLeft: "0px", paddingRight: "45px"}}>
                                    <input type="checkbox" id="pickles" value="pickles" name="pickles" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="pickles" style={{paddingRight: "98px"}}>Pickles</label>
                                    <input type="checkbox" id="lettuce" value="lettuce" name="lettuce" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="lettuce">Lettuce</label>    
                                </div>
                                <div style={{paddingRight: "45px"}}>
                                    <input type="checkbox" id="greenpepper" value="greenpepper" name="greenpepper" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="greenpepper" style={{paddingRight: "43px"}}>Green Peppers</label>
                                    <input type="checkbox" id="onions" value="onions" name="onions" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="onions">Onions</label>    
                                </div>
                                <div style={{paddingRight: "5px"}}>
                                    <input type="checkbox" id="caramelizedonions" value="caramelizedonions" name="caramelizedonions" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="caramelizedonions" style={{paddingRight: "5px"}}>Caramelized Onions</label>
                                    <input type="checkbox" id="friedonions" value="friedonions" name="friedonions" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="friedonions">Fried Onions</label>    
                                </div>
                            </div>
                            <label>Condiment</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingLeft: "40px"}}>
                                    <input type="checkbox" id="flakysalt" value="flakysalt" name="flakysalt" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="flakysalt" style={{paddingRight: "35px"}}>Flaky Salt</label>
                                    <input type="checkbox" id="blackpepper" value="blackpepper" name="blackpepper" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="blackpepper">Black Pepper</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="garlicpowder" value="garlicpowder" name="garlicpowder" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="garlicpowder" style={{paddingRight: "70px"}}>Garlic Powder</label> 
                                </div>
                            </div>
                            <label>Other</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="checkbox" id="egg" value="egg" name="egg" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="egg" style={{paddingRight: "140px"}}>Egg</label>   
                                </div>
                            </div>
                            <div className="form-group">
                                <p>Go back to burgers...<Link to="/burgers" style={{fontSize: "20px", color: "greenyellow"}}>Here!</Link></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};