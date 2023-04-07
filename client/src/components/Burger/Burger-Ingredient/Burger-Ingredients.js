export const BurgerIngredients = () => {
    return (
        <main>
            <section className="container" id="burger-ingredient">
                <header className="ingredient">
                    <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>We make our burgers with the freshest ingredients out there!</p>
                    <p> </p>
                    <p className="line"></p>
                    <p>&nbsp;&nbsp;&nbsp;</p>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Here is a list of products we use in the making of the burgers!</p>
                    <p> </p>
                    <p className="line"></p>
                </header>
                <div className="row text-center">
                    {/* <ng-container *ngIf="burgerIngredientList">
                        <ng-container *ngFor="let burgerIngredient of burgerIngredientList let i = index">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card h-100">
                                    <img className="card-img-top"
                                        src={{burgerIngredient.picture}}
                                        alt="pizzaIngredient">
                                    <div className="card-body">
                                        <h5 className="card-title2"><span>{{burgerIngredient.name}}</span></h5>
                                        <h5 className="mt-4 card-info"> Type: {{burgerIngredient.type}}<span></span></h5>
                                        <h5 className="mt-4 card-info"> Weight: {{burgerIngredient.weight}}g<span></span></h5>
                                    </div>
                                    <div className="card-footer">
                                        <a [routerLink]="['/burgers','burgerIngredient', burgerIngredient._id]" className="btn btn-success">Details</a>
                                    </div>
                                </div>
                            </div>
                        </ng-container>
                    </ng-container>
                    <ng-container *ngIf="!burgerIngredientList">
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