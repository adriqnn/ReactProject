export const PizzaDetails = () => {
    return (
        <main>
            <section className="py-5 details" id="pizza-ingredient-details-page">
                <div className="container">
                    <div className="item-details">
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza Burger Spot</h1>
                    </div>
                    <p className="line"></p>
                    <div className="item-info">
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Pizza details for :</p>
                        <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Weight: g</p>
                    </div>
                    <p className="line"></p>
                    <div className="item-info">
                        <p>&nbsp;&nbsp;&nbsp;</p>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Ingredients for :</p>
                        {/* <ng-container *ngFor="let ingredient of pizza?.ingredients">
                            <p className="lead" style="font-size: 18px; font-style: italic;font-family: cursive;">{{ingredient.name}} - {{ingredient.description}}</p>
                        </ng-container> */}
                        <p>&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <p className="line"></p>
                    <div className="item-picanddesc">
                        <div>
                            <img className="img-fluid rounded"
                                src=""
                                alt="pizza-ingredient-image"/>
                        </div>
                        <div className="item-desc">
                            <h5 style={{fontStyle: "italic", fontFamily: "cursive"}}>Description</h5>
                            <textarea className="lead" disabled style={{fontStyle: "italic", fontFamily: "cursive"}}></textarea>
                        </div>
                    </div>
                    <div className="row text-center">
                        {/* <ng-container *ngIf="pizza?.owner == user">
                            <div className="col-lg-4 col-md-6 mb-4">                        
                                <div >
                                    <a [routerLink]="['/pizzas','item', 'delete', pizza?._id + '[!&%$!]' + pizza?.owner + '[!&%$!]' + user]" className="btn btn-danger">Delete</a>
                                </div>
                            </div>
                        </ng-container>          */}
                    </div>
                </div>
            </section>
        </main>
    );
};