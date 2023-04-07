export const BurgerIngredientDetails = () => {
    return (
        <main>
            <section className="py-5 details" id="pizza-ingredient-details-page">
                <div className="container">
                    <div className="item-details">
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza Burger Spot</h1>
                    </div>
                    <p className="line"></p>
                    <div className="item-info">
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Burger Ingrediet Details for :</p>
                        <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Type: </p>
                        <p className="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Weight: </p>
                    </div>
                    <p className="line"></p>
                    <div className="item-picanddesc">
                        <div>
                            <img className="img-fluid rounded"
                                src=""
                                alt="burger-ingredient-image"/>
                        </div>
                        <div className="item-desc">
                            <h5 style={{fontStyle: "italic", fontFamily: "cursive"}}>Description</h5>
                            <textarea className="lead" disabled style={{fontStyle: "italic", fontFamily: "cursive"}}></textarea>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};