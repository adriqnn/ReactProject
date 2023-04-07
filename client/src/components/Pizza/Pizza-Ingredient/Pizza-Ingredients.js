export const PizzaIngredients = () => {
    return (
        <main>
            <section className="container" id="pizza-ingredient">
                <header className="ingredient">
                    <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>We make our pizzas with the freshest ingredients out there!</p>
                    <p> </p>
                    <p className="line"></p>
                    <p>&nbsp;&nbsp;&nbsp;</p>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Here is a list of products we use in the making of the pizzas!</p>
                    <p> </p>
                    <p className="line"></p>
                </header>
                <div className="row text-center">
                    {/* <ng-container *ngIf="pizzaIngredientList">
                        <ng-container *ngFor="let pizzaIngredient of pizzaIngredientList let i = index">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card h-100">
                                    <img className="card-img-top"
                                        src={{pizzaIngredient.picture}}
                                        alt="pizzaIngredient">
                                    <div className="card-body">
                                        <h5 className="card-title2"><span>{{pizzaIngredient.name}}</span></h5>
                                        <h5 className="mt-4 card-info"> Type: {{pizzaIngredient.type}}<span></span></h5>
                                        <h5 className="mt-4 card-info"> Weight: {{pizzaIngredient.weight}}g<span></span></h5>
                                    </div>
                                    <div className="card-footer">
                                        <a [routerLink]="['/pizzas','pizzaIngredient', pizzaIngredient._id]" className="btn btn-success">Details</a>
                                    </div>
                                </div>
                            </div>
                        </ng-container>
                    </ng-container>
                    <ng-container *ngIf="!pizzaIngredientList">
                        <div className="no-ingredients">
                            <img src="/assets/pictures/main/404missin.png"/>
                            <p className="lead">Please try again later...</p>
                        </div>
                    </ng-container>           */}
                </div>
            </section>
        </main>
    );
};