export const PizzaIngredients = () => {
    return (
        <main>
            <section class="container" id="pizza-ingredient">
                <header class="ingredient">
                    <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                    <p class="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>We make our pizzas with the freshest ingredients out there!</p>
                    <p> </p>
                    <p class="line"></p>
                    <p>&nbsp;&nbsp;&nbsp;</p>
                    <p class="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Here is a list of products we use in the making of the pizzas!</p>
                    <p> </p>
                    <p class="line"></p>
                </header>
                <div class="row text-center">
                    {/* <ng-container *ngIf="pizzaIngredientList">
                        <ng-container *ngFor="let pizzaIngredient of pizzaIngredientList let i = index">
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card h-100">
                                    <img class="card-img-top"
                                        src={{pizzaIngredient.picture}}
                                        alt="pizzaIngredient">
                                    <div class="card-body">
                                        <h5 class="card-title2"><span>{{pizzaIngredient.name}}</span></h5>
                                        <h5 class="mt-4 card-info"> Type: {{pizzaIngredient.type}}<span></span></h5>
                                        <h5 class="mt-4 card-info"> Weight: {{pizzaIngredient.weight}}g<span></span></h5>
                                    </div>
                                    <div class="card-footer">
                                        <a [routerLink]="['/pizzas','pizzaIngredient', pizzaIngredient._id]" class="btn btn-success">Details</a>
                                    </div>
                                </div>
                            </div>
                        </ng-container>
                    </ng-container>
                    <ng-container *ngIf="!pizzaIngredientList">
                        <div class="no-ingredients">
                            <img src="/assets/pictures/main/404missin.png"/>
                            <p class="lead">Please try again later...</p>
                        </div>
                    </ng-container>           */}
                </div>
            </section>
        </main>
    );
};