import { Link } from "react-router-dom";

export const Pizzas = () => {

    return (
        <main>
            <section className="container" id="pizzas-main">
                <header className="ingredient">
                    <h1 style={{fontFamily: "cursive"}}>
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>We make the best Pizzas in town and here is a list of our Pizzas!</p>
                        <p> </p>
                        <p className="line"></p>
                        <p>&nbsp;&nbsp;&nbsp;</p>

                        {/* <ng-container *ngIf="user">
                            <a routerLink="/pizzas/create" style="color: gold;">Add Pizza</a> 
                            <!-- |
                            <a routerLink="/pizzas">Pizza Pies</a>  -->
                            | 
                        </ng-container> */}

                        <Link to="/pizzas/pizzaIngredient" style={{color: "gold"}}>Ingredients</Link>
                    </h1>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "22px"}}>Pizzas List:</p>
                </header>
                <div className="row text-center">

                    {/* <ng-container *ngIf="pizzas">
                        <ng-container *ngFor="let pizza of pizzas let i = index">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card h-100">
                                    <img className="card-img-top"
                                        src={{pizza.picture}}
                                        alt="pizzaIngredient">
                                    <div className="card-body">
                                        <h5 className="card-title2"><span>{{pizza.name}}</span></h5>
                                        <h5 className="mt-4 card-info"> Weight: {{pizza.weight}}g<span></span></h5>
                                    </div>
                                    <div className="card-footer">
                                        <a [routerLink]="['/pizzas','item', pizza._id]" className="btn btn-success">Details</a>
                                    </div>
                                </div>
                            </div>
                        </ng-container>
                    </ng-container> */}

                    {/* <ng-container *ngIf="!pizzas || pizzas.length == 0">
                        <div className="no-ingredients">
                            <img src="/assets/pictures/main/404missin.png"/>
                            <p className="lead">Please try again later...</p>
                        </div>
                    </ng-container>     */}

                </div>
            </section>
        </main>
    );
};