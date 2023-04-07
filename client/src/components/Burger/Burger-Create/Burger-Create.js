export const BurgerCreate = () => {
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
                        <form >

                            {/* <ng-container *ngIf="errorMsg">
                                <div className="form-group">
                                    <ng-container>{{removeMsg()}}</ng-container>
                                    <label for="error" style="color: red;">{{msg}}</label>
                                    <!-- <input type="text"  className="form-control" value=""> -->
                                </div>
                            </ng-container> */}

                            <div className="form-group">
                                <label for="name">Burger Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Burger Name" name="name" value=""/>
                            </div>

                            {/* <ng-container *ngIf="nameInput.touched">
                                <ng-container *ngIf="nameInput?.errors?.['required']">
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Burger name is required!</label>
                                        <!-- <input type="text"  className="form-control" value=""> -->
                                    </div>
                                </ng-container>
                                <ng-container *ngIf="nameInput?.errors?.['minlength']">
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Burger name must be at least 3 characters!</label>
                                        <!-- <input type="text"  className="form-control" value=""> -->
                                    </div>
                                </ng-container>
                            </ng-container> */}

                            <div className="form-group">
                                <label for="weight">Burger Weight</label>
                                <input type="number" className="form-control" id="weight" placeholder="Burger Weight" name="weight" value=""/>
                            </div>

                            {/* // <ng-container *ngIf="weightInput.touched">
                            //     <ng-container *ngIf="weightInput?.errors?.['required']">
                            //         <div className="form-group">
                            //             <label for="error" style="color: red;">Burger weight is required!</label>
                            //             <!-- <input type="text"  className="form-control" value=""> -->
                            //         </div>
                            //     </ng-container>
                            //     <ng-container *ngIf="weightInput?.errors?.['min']">
                            //         <div className="form-group">
                            //             <label for="error" style="color: red;">Burger weight must be at least 5 grams!</label>
                            //             <!-- <input type="text"  className="form-control" value=""> -->
                            //         </div>
                            //     </ng-container>
                            // </ng-container> */}

                            <div className="form-group">
                                <label for="description">Burger Description</label>
                                <input type="text" className="form-control" id="description" placeholder="Burger Description" name="description" value=""/>
                            </div>

                            {/* <ng-container *ngIf="descriptionInput.touched">
                                <ng-container *ngIf="descriptionInput?.errors?.['required']">
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Burger description is required!</label>
                                        <!-- <input type="text"  className="form-control" value=""> -->
                                    </div>
                                </ng-container>
                                <ng-container *ngIf="descriptionInput?.errors?.['minlength']">
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Burger description must be at least 3 characters!</label>
                                        <!-- <input type="text"  className="form-control" value=""> -->
                                    </div>
                                </ng-container>
                            </ng-container> */}

                            <label>Bun</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="radio" id="regularbun" name="bun" value="Regular Bun"/>
                                    <label for="regularbun">Regular Bun</label>
                                    <input type="radio" id="sesameseedbun" name="bun" value="Sesame Seed Bun"/>
                                    <label for="sesameseedbun">Sesame Seed Bun</label>    
                                </div>
                                <div>
                                    <input type="radio" id="briochebun" name="bun" value="Brioche Bun"/>
                                    <label for="briochebun" style={{paddingRight: "140px"}}>Brioche Bun</label>
                                </div>
                            </div>
                            <label>Sauce</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="checkbox" id="mayonnaise" name="mayonnaise"/>
                                    <label for="mayonnaise">Mayonanaise</label>
                                    <input type="checkbox" id="ketchup" name="ketchup"/>
                                    <label for="ketchup">Ketchup</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="burgersauce" name="burgersauce"/>
                                    <label for="burgersauce">Burger Sauce</label> 
                                    <input type="checkbox" id="mustard" name="mustard"/>
                                    <label for="mustard">Mustard</label>
                                </div>
                            </div>
                            <label>Cheese</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="checkbox" id="emental" name="emental"/>
                                    <label for="emental" style={{paddingRight: "40px"}}>Emental</label>
                                    <input type="checkbox" id="gouda" name="gouda"/>
                                    <label for="gouda">Gouda</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="cheddar" name="cheddar"/>
                                    <label for="cheddar" style={{paddingRight: "100px"}}>Cheddar</label> 
                                </div>
                            </div>
                            <label>Meat</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingRight: "5px", paddingLeft: "15px"}}>
                                    <input type="checkbox" id="beef" name="beef"/>
                                    <label for="beef" style={{paddingRight: "60px"}}>Beef</label>
                                    <input type="checkbox" id="chicken" name="chicken"/>
                                    <label for="chicken">Chicken</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="fish" name="fish"/>
                                    <label for="fish" style={{paddingRight: "65px"}}>Fish</label> 
                                    <input type="checkbox" id="bacon" name="bacon"/>
                                    <label for="bacon">Bacon</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="pepperoni" name="pepperoni"/>
                                    <label for="pepperoni" style={{paddingRight: "80px"}}>Pepperoni</label>
                                </div>
                            </div>
                            <label>Vegetables</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingLeft: "0px", paddingRight: "10px"}}>
                                    <input type="checkbox" id="tomatoes" name="tomatoes"/>
                                    <label for="tomatoes" style={{paddingRight: "75px"}}>Tomatoes</label>
                                    <input type="checkbox" id="mushrooms" name="mushrooms"/>
                                    <label for="mushrooms">Mushrooms</label>    
                                </div>
                                <div style={{paddingLeft: "0px", paddingRight: "45px"}}>
                                    <input type="checkbox" id="pickles" name="pickles"/>
                                    <label for="pickles" style={{paddingRight: "98px"}}>Pickles</label>
                                    <input type="checkbox" id="lettuce" name="lettuce"/>
                                    <label for="lettuce">Lettuce</label>    
                                </div>
                                <div style={{paddingRight: "45px"}}>
                                    <input type="checkbox" id="greenpepper" name="greenpepper"/>
                                    <label for="greenpepper" style={{paddingRight: "43px"}}>Green Peppers</label>
                                    <input type="checkbox" id="onions" name="onions"/>
                                    <label for="onions">Onions</label>    
                                </div>
                                <div style={{paddingRight: "5px"}}>
                                    <input type="checkbox" id="caramelizedonions" name="caramelizedonions"/>
                                    <label for="caramelizedonions" style={{paddingRight: "5px"}}>Caramelized Onions</label>
                                    <input type="checkbox" id="friedonions" name="friedonions"/>
                                    <label for="friedonions">Fried Onions</label>    
                                </div>
                            </div>
                            <label>Condiment</label>
                            <div className="ingredientsbuild">
                                <div style={{paddingLeft: "40px"}}>
                                    <input type="checkbox" id="flakysalt" name="flakysalt"/>
                                    <label for="flakysalt" style={{paddingRight: "35px"}}>Flaky Salt</label>
                                    <input type="checkbox" id="blackpepper" name="blackpepper"/>
                                    <label for="blackpepper">Black Pepper</label>    
                                </div>
                                <div>
                                    <input type="checkbox" id="garlicpowder" name="garlicpowder"/>
                                    <label for="garlicpowder" style={{paddingRight: "70px"}}>Garlic Powder</label> 
                                </div>
                            </div>
                            <label>Other</label>
                            <div className="ingredientsbuild">
                                <div>
                                    <input type="checkbox" id="egg" name="egg"/>
                                    <label for="egg" style={{paddingRight: "140px"}}>Egg</label>   
                                </div>
                            </div>
                            <div className="form-group">
                                <p>Go back to burgers...<a routerLink="/burgers" style={{fontSize: "20px", color: "greenyellow"}}>Here!</a></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};