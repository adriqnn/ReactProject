import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { pizzaServiceFactory } from "../../../services/pizzaService";

export const PizzaCreate = () => {
    const navigate = useNavigate();
    const { auth } = useContext(ApplicationContext);
    const pizzaService = pizzaServiceFactory(auth.token);

    const initialFormValues = {};
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

        if(name === '' || weight === '' || description === ''){
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
                        <form >

                            {/* <ng-container *ngIf="errorMsg">
                                <div className="form-group">
                                    <ng-container>{{removeMsg()}}</ng-container>
                                    <label for="error" style="color: red;">{{msg}}</label>
                                    <!-- <input type="text"  className="form-control" value=""> -->
                                </div>
                            </ng-container> */}

                            <div className="form-group">
                                <label for="name">Pizza Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Pizza Name" name="name" value=""/>
                            </div>

                            {/* <ng-container *ngIf="nameInput.touched">
                                <ng-container *ngIf="nameInput?.errors?.['required']">
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Pizza name is required!</label>
                                        <!-- <input type="text"  className="form-control" value=""> -->
                                    </div>
                                </ng-container>
                                <ng-container *ngIf="nameInput?.errors?.['minlength']">
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Pizza name must be at least 3 characters!</label>
                                        <!-- <input type="text"  className="form-control" value=""> -->
                                    </div>
                                </ng-container>
                            </ng-container> */}

                            <div className="form-group">
                                <label for="weight">Pizza Weight</label>
                                <input type="number" className="form-control" id="weight" placeholder="Pizza Weight" name="weight" value=""/>
                            </div>
                            
                            {/* <ng-container *ngIf="weightInput.touched">
                                <ng-container *ngIf="weightInput?.errors?.['required']">
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Pizza weight is required!</label>
                                        <!-- <input type="text"  className="form-control" value=""> -->
                                    </div>
                                </ng-container>
                                <ng-container *ngIf="weightInput?.errors?.['min']">
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Pizza weight must be at least 5 grams!</label>
                                        <!-- <input type="text"  className="form-control" value=""> -->
                                    </div>
                                </ng-container>
                            </ng-container> */}

                            <div className="form-group">
                                <label for="description">Pizza Description</label>
                                <input type="text" className="form-control" id="description" placeholder="Pizza Description" name="description" value=""/>
                            </div>

                            {/* <ng-container *ngIf="descriptionInput.touched">
                                <ng-container *ngIf="descriptionInput?.errors?.['required']">
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Pizza description is required!</label>
                                        <!-- <input type="text"  className="form-control" value=""> -->
                                    </div>
                                </ng-container>
                                <ng-container *ngIf="descriptionInput?.errors?.['minlength']">
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Pizza description must be at least 3 characters!</label>
                                        <!-- <input type="text"  className="form-control" value=""> -->
                                    </div>
                                </ng-container>
                            </ng-container> */}

                            <label>Dough</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="radio" id="traditionaldough" name="dough" value="Traditional Dough"/>
                                    <label for="traditionaldough">Traditional Dough</label>
                                    <input type="radio" id="italianstyle" name="dough" value="Italian Style"/>
                                    <label for="italianstyle">Italian Style</label>    
                                </div>
                                <div>
                                    <input type="radio" id="thincruststyle" name="dough" value="Thin Crust Style"/>
                                    <label for="thincruststyle" style={{paddingRight: "110px"}}>Thin Crust Style</label>
                                </div>
                            </div>
                            <label>Sauce</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="checkbox" id="tomatosauce" name="tomatosauce"/>
                                    <label for="tomatosauce">Tomato Sauce</label>
                                    <input type="checkbox" id="ketchup" name="ketchup"/>
                                    <label for="ketchup">Ketchup</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="sourcream" name="sourcream"/>
                                    <label for="sourcream" style={{paddingRight: "85px"}}>Sour Cream</label> 
                                </div>
                            </div>
                            <label>Cheese</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingLeft: "25px"}}>
                                    <input type="checkbox" id="emental" name="emental"/>
                                    <label for="emental" style={{paddingRight: "40px"}}>Emental</label>
                                    <input type="checkbox" id="mozzarella" name="mozzarella"/>
                                    <label for="mozzarella">Mozzarella</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="smokedcheese" name="smokedcheese"/>
                                    <label for="smokedcheese" style={{paddingRight: "50px"}}>Smoked Cheese</label> 
                                </div>
                            </div>
                            <label>Meat</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingLeft: "10px"}}>
                                    <input type="checkbox" id="pepperoni" name="pepperoni"/>
                                    <label for="pepperoni" style={{paddingRight: "25px"}}>Pepperoni</label>
                                    <input type="checkbox" id="chicken" name="chicken"/>
                                    <label for="chicken">Chicken</label>    
                                </div>
                                <div style={{paddingLeft: "57px"}}>
                                    <input type="checkbox" id="smokedham" name="smokedham"/>
                                    <label for="smokedham">Smoked Ham</label> 
                                    <input type="checkbox" id="smokedbacon" name="smokedbacon"/>
                                    <label for="smokedbacon">Smoked Bacon</label>
                                </div>
                            </div>
                            <label>Vegetables</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingLeft: "40px"}}>
                                    <input type="checkbox" id="tomatoes" name="tomatoes"/>
                                    <label for="tomatoes" style={{paddingRight: "25px"}}>Tomatoes</label>
                                    <input type="checkbox" ngModel id="mushrooms" name="mushrooms"/>
                                    <label for="mushrooms">Mushrooms</label>    
                                </div>
                                <div style={{paddingRight: "10px"}}>
                                    <input type="checkbox" id="pickles" name="pickles"/>
                                    <label for="pickles" style={{paddingRight: "45px"}}>Pickles</label>
                                    <input type="checkbox" id="corn" name="corn"/>
                                    <label for="corn">Corn</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="greenpeppers" name="greenpeppers"/>
                                    <label for="greenpeppers" style={{marginRight: "44px"}}>Green Peppers</label>
                                    <input type="checkbox" id="onions" name="onions"/>
                                    <label for="onions" style={{marginRight: "-2px"}}>Onions</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="olives" name="olives"/>
                                    <label for="olives" style={{paddingRight: "110px"}}>Olives</label> 
                                </div>
                            </div>
                            <label>Condiment</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="checkbox" id="flakysalt" name="flakysalt"/>
                                    <label for="flakysalt">Flaky Salt</label>
                                    <input type="checkbox" id="oregano" name="oregano"/>
                                    <label for="oregano">Oregano</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="garlicpowder" name="garlicpowder"/>
                                    <label for="garlicpowder">Garlic Powder</label> 
                                    <input type="checkbox" id="basil" name="basil"/>
                                    <label for="basil">Basil</label> 
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