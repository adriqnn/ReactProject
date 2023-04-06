import { Link } from "react-router-dom"

export const Burger = () => {

    return (
        <main>
            <section className="container" id="burgers-main">
                <header className="ingredient">
                    <h1 style={{fontFamily: "cursive"}}>
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>We make the best Burgers in town and here is a list of our Burgers!</p>
                        <p> </p>
                        <p className="line"></p>
                        <p>&nbsp;&nbsp;&nbsp;</p>

                        {/* <>
                            <a routerLink="/burgers/create" style="color: gold;">Add Burger</a>
                            <!-- |
                            <a routerLink="/burgers">Burgers</a>  -->
                            | 
                        </> */}

                        <Link to="/burgers/burgerIngredient" style={{color: "gold"}}>Ingredients</Link>
                    </h1>
                    <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "22px"}}>Burgers List:</p>
                </header>
                <div className="row text-center">

                    {/* <ng-container *ngIf="burgers">
                        <ng-container *ngFor="let burger of burgers let i = index">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card h-100">
                                    <img className="card-img-top2"
                                        src={{burger.picture}}
                                        alt="pizzaIngredient">
                                    <div className="card-body">
                                        <h5 className="card-title2"><span>{{burger.name}}</span></h5>
                                        <h5 className="mt-4 card-info"> Weight: {{burger.weight}}g<span></span></h5>
                                    </div>
                                    <div className="card-footer">
                                        <a [routerLink]="['/burgers','item', burger._id]" className="btn btn-success">Details</a>
                                    </div>
                                    <!-- <ng-container *ngIf="user?._id == burger?.owner">
                                        <a [routerLink]="['/burgers','burgerIngredient', burger._id]" className="btn btn-success">Delete</a>
                                    </ng-container> -->
                                </div>
                            </div>
                        </ng-container>
                    </ng-container> */}

                    {/* <>
                        <div className="no-ingredients">
                            <img src="/assets/pictures/main/404missin.png"/>
                            <p className="lead">Please try again later...</p>
                        </div>
                    </>  */}

                </div>
            </section>
        </main>        
    );
};