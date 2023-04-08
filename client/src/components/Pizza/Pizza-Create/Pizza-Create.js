import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { pizzaServiceFactory } from "../../../services/pizzaService";

export const PizzaCreate = () => {
    const navigate = useNavigate();
    const { auth } = useContext(ApplicationContext);
    const pizzaService = pizzaServiceFactory(auth.token);

    const initialFormValues = { name: "", weight: "", description: "", dough: "", tomatosauce: "", ketchup: "", sourcream: "",  
    emental: "", mozzarella: "", smokedcheese: "", pepperoni: "", chicken: "", smokedham: "", smokedbacon: "", 
    tomatoes: "", mushrooms: "", pickles: "", corn: "", greenpeppers: "", onions: "", olives: "", flakysalt: "", oregano: "", garlicpowder: "", basil: ""};
    const [formValues, setFormValues] = useState(initialFormValues);
    const initiaErrorValues = { pizzaNameRequired: false, pizzaNameLength: false, pizzaWeightRequired: false, pizzaWeightGramsFive: false, pizzaDescriptionRequired: false, pizzaDescriptionLenght: false };
    const changeFormErrors = { pizzaNameRequired: false, pizzaNameLength: false, pizzaWeightRequired: false, pizzaWeightGramsFive: false, pizzaDescriptionRequired: false, pizzaDescriptionLenght: false };
    const [formErrors, setFormErrors] = useState(initiaErrorValues);

    const onNameChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.name === '' ? changeFormErrors.pizzaNameRequired = true : changeFormErrors.pizzaNameRequired = false;
        formValues.name.length < 3 ? changeFormErrors.pizzaNameLength = true : changeFormErrors.pizzaNameLength = false;
        setFormErrors(state => ({...state, pizzaNameRequired: changeFormErrors.pizzaNameRequired, pizzaNameLength: changeFormErrors.pizzaNameLength}));
    };

    const onWeightChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.weight === '' ? changeFormErrors.pizzaWeightRequired = true : changeFormErrors.pizzaWeightRequired = false;
        Number(formValues.weight) < 5 ? changeFormErrors.pizzaWeightGramsFive = true : changeFormErrors.pizzaWeightGramsFive = false;
        setFormErrors(state => ({...state, pizzaWeightRequired: changeFormErrors.pizzaWeightRequired, pizzaWeightGramsFive: changeFormErrors.pizzaWeightGramsFive}));
    };

    const onDescriptionChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
        formValues.description === '' ? changeFormErrors.pizzaDescriptionRequired = true : changeFormErrors.pizzaDescriptionRequired = false;
        formValues.description.length < 3 ? changeFormErrors.pizzaDescriptionLenght = true : changeFormErrors.pizzaDescriptionLenght = false;
        setFormErrors(state => ({...state, pizzaDescriptionRequired: changeFormErrors.pizzaDescriptionRequired, pizzaDescriptionLenght: changeFormErrors.pizzaDescriptionLenght}));
    };

    const onOtherChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onPizzaCreateFormSubmit(formValues);
        // setFormValues(initialFormValues);
    };

    const [pizzaFormFieldsError, setPizzaFormFieldsErros] = useState(false);
    const [pizzaNameTaken, setPizzaNameTaken] = useState(false);
    const onPizzaCreateFormSubmit = async (pizzaData) =>{
        const {name, weight, description, dough, ...rest } = pizzaData;
        const main = {name, weight, description, dough};

        if(name === '' || weight === '' || description === '' || dough === ''){
            setPizzaFormFieldsErros(true)
            return;
        }else{
            setPizzaFormFieldsErros(false);
        };

        const secondary = {
            basil: !!rest.basil === true ? 'Basil' : '',
            chicken: !!rest.chicken === true ? 'Chicken' : '',
            corn: !!rest.corn === true ? 'Corn' : '',
            emental: !!rest.emental === true ? 'Emental' : '',
            flakysalt: !!rest.flakysalt === true ? 'Flaky Salt' : '',
            garlicpowder: !!rest.garlicpowder === true ? 'Garlic Powder' : '',
            greenpeppers: !!rest.greenpeppers === true ? 'Green Peppers' : '',
            ketchup: !!rest.ketchup === true ? 'Ketchup' : '',
            mozzarella: !!rest.mozzarella === true ? 'Mozzarella' : '',
            mushrooms: !!rest.mushrooms === true ? 'Mushrooms' : '',
            olives: !!rest.olives === true ? 'Olives' : '',
            onions: !!rest.onions === true ? 'Onions' : '',
            oregano: !!rest.oregano === true ? 'Oregano' : '',
            pepperoni: !!rest.pepperoni === true ? 'Pepperoni' : '',
            pickles: !!rest.pickles === true ? 'Pickles' : '',
            smokedbacon: !!rest.smokedbacon === true ? 'Smoked Bacon' : '',
            smokedcheese: !!rest.smokedcheese === true ? 'Smoked Cheese' : '',
            smokedham: !!rest.smokedham === true ? 'Smoked Ham' : '',
            sourcream: !!rest.sourcream === true ? 'Sour Cream' : '',
            tomatoes: !!rest.tomatoes === true ? 'Tomatoes' : '',
            tomatosauce: !!rest.tomatosauce === true ? 'Tomato Sauce' : '',
        };
        const owner = auth.user._id;
        const pizza = {main: main, secondary: secondary, owner: owner};

        try{
            await pizzaService.createPizza(pizza);
            navigate('/pizzas');
        }catch(err){
            err.message === 'Pizza name already in the Database!' ? setPizzaNameTaken(true) : setPizzaNameTaken(false);
        };
    };

    return (
        <main>
            <section className="py-5" id="register-page">
                <div className="container register-page">
                    <h1 style={{fontFamily: "cursive"}}>
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Create a Pizza here!</p>
                        <p> </p>
                        <p className="line"></p>
                    </h1>
                    <div className="register">
                        <form method="POST" onSubmit={onSubmit}>

                            {   
                                pizzaFormFieldsError && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Please fill out name, weight, description and dough!</label>
                                    </div>
                                )
                            }

                            {
                                pizzaNameTaken && (
                                    <div className="form-group">
                                    <label htmlFor="error" style={{color: "red"}}>Pizza name already in the Database!</label>
                                </div>
                                )
                            }

                            <div className="form-group">
                                <label htmlFor="name">Pizza Name</label>
                                <input type="text" className={`form-control ${formErrors.pizzaNameRequired ? "errorred" : ""} ${formErrors.pizzaNameLength ? "errorred" : "" }`} id="name" placeholder="Pizza Name" 
                                    name="name" value={formValues.name} onChange={onNameChangeHandler} onBlur={onNameChangeHandler}/>
                            </div>

                            {
                                (formErrors.pizzaNameRequired || formErrors.pizzaNameLength) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Pizza name is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }

                            <div className="form-group">
                                <label htmlFor="weight">Pizza Weight</label>
                                <input type="number" className={`form-control ${formErrors.pizzaWeightRequired ? "errorred" : ""} ${formErrors.pizzaWeightGramsFive ? "errorred" : ""}`} id="weight" placeholder="Pizza Weight" 
                                name="weight" value={formValues.weight} onChange={onWeightChangeHandler} onBlur={onWeightChangeHandler}/>
                            </div>

                            {
                                (formErrors.pizzaWeightRequired || formErrors.pizzaWeightGramsFive) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Pizza weight is required and must be at least 5 grams!</label>
                                     </div>
                                )
                            }

                            <div className="form-group">
                                <label htmlFor="description">Pizza Description</label>
                                <input type="text" className={`form-control ${formErrors.burgerDescriptionRequired ? "errorred" : ""} ${formErrors.burgerDescriptionLenght ? "errorred" : ""}`} id="description" placeholder="Pizza Description" 
                                name="description" value={formValues.description} onChange={onDescriptionChangeHandler} onBlur={onDescriptionChangeHandler}/>
                            </div>

                            {
                                (formErrors.pizzaDescriptionRequired || formErrors.pizzaDescriptionLenght) && (
                                    <div className="form-group">
                                        <label htmlFor="error" style={{color: "red"}}>Pizza description is required and must be at least 3 characters!</label>
                                    </div>
                                )
                            }

                            <label>Dough</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="radio" id="traditionaldough" name="dough" value="Traditional Dough" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="traditionaldough">Traditional Dough</label>
                                    <input type="radio" id="italianstyle" name="dough" value="Italian Style" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="italianstyle">Italian Style</label>    
                                </div>
                                <div>
                                    <input type="radio" id="thincruststyle" name="dough" value="Thin Crust Style" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="thincruststyle" style={{paddingRight: "110px"}}>Thin Crust Style</label>
                                </div>
                            </div>
                            <label>Sauce</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="checkbox" id="tomatosauce" value="tomatosauce" name="tomatosauce" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="tomatosauce">Tomato Sauce</label>
                                    <input type="checkbox" id="ketchup" value="ketchup" name="ketchup" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="ketchup">Ketchup</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="sourcream" value="sourcream" name="sourcream" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="sourcream" style={{paddingRight: "85px"}}>Sour Cream</label> 
                                </div>
                            </div>
                            <label>Cheese</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingLeft: "25px"}}>
                                    <input type="checkbox" id="emental" value="emental" name="emental" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="emental" style={{paddingRight: "40px"}}>Emental</label>
                                    <input type="checkbox" id="mozzarella" value="mozzarella" name="mozzarella" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="mozzarella">Mozzarella</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="smokedcheese" value="smokedcheese" name="smokedcheese" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="smokedcheese" style={{paddingRight: "50px"}}>Smoked Cheese</label> 
                                </div>
                            </div>
                            <label>Meat</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingLeft: "10px"}}>
                                    <input type="checkbox" id="pepperoni" value="pepperoni" name="pepperoni" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="pepperoni" style={{paddingRight: "25px"}}>Pepperoni</label>
                                    <input type="checkbox" id="chicken" value="chicken" name="chicken" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="chicken">Chicken</label>    
                                </div>
                                <div style={{paddingLeft: "57px"}}>
                                    <input type="checkbox" id="smokedham" value="smokedham" name="smokedham" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="smokedham">Smoked Ham</label> 
                                    <input type="checkbox" id="smokedbacon" value="smokedbacon" name="smokedbacon" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="smokedbacon">Smoked Bacon</label>
                                </div>
                            </div>
                            <label>Vegetables</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingLeft: "40px"}}>
                                    <input type="checkbox" id="tomatoes" value="tomatoes" name="tomatoes" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="tomatoes" style={{paddingRight: "25px"}}>Tomatoes</label>
                                    <input type="checkbox" id="mushrooms" value="mushrooms" name="mushrooms" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="mushrooms">Mushrooms</label>    
                                </div>
                                <div style={{paddingRight: "10px"}}>
                                    <input type="checkbox" id="pickles" value="pickles" name="pickles" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="pickles" style={{paddingRight: "45px"}}>Pickles</label>
                                    <input type="checkbox" id="corn" value="corn" name="corn" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="corn">Corn</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="greenpeppers" value="greenpeppers" name="greenpeppers" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="greenpeppers" style={{marginRight: "44px"}}>Green Peppers</label>
                                    <input type="checkbox" id="onions" value="onions" name="onions" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="onions" style={{marginRight: "-2px"}}>Onions</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="olives" value="olives" name="olives" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="olives" style={{paddingRight: "110px"}}>Olives</label> 
                                </div>
                            </div>
                            <label>Condiment</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="checkbox" id="flakysalt" value="flakysalt" name="flakysalt" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="flakysalt">Flaky Salt</label>
                                    <input type="checkbox" id="oregano" value="oregano" name="oregano" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="oregano">Oregano</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="garlicpowder" value="garlicpowder" name="garlicpowder" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="garlicpowder">Garlic Powder</label> 
                                    <input type="checkbox" id="basil" value="basil" name="basil" onChange={onOtherChangeHandler}/>
                                    <label htmlFor="basil">Basil</label> 
                                </div>
                            </div>
                            <div className="form-group">
                                <p>Go back to burgers...<Link to="/pizzas" style={{fontSize: "20px", color: "greenyellow"}}>Here!</Link></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};