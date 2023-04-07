export const PizzaIngredientDetails = () => {
    return (
        <main>
            <section class="py-5 details" id="pizza-ingredient-details-page">
                <div class="container">
                    <div class="item-details">
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza Burger Spot</h1>
                    </div>
                    <p class="line"></p>
                    <div class="item-info">
                        <p class="lead" style={{fontStyle: "italic", fontFamily: "cursive", color: "gold"}}>Pizza Ingrediet Details for :</p>
                        <p class="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Type: </p>
                        <p class="lead" style={{fontSize: "18px", fontStyle: "italic", fontFamily: "cursive"}}>Weight: </p>
                    </div>
                    <p class="line"></p>
                    <div class="item-picanddesc">
                        <div>
                            <img class="img-fluid rounded"
                                src=""
                                alt="pizza-ingredient-image"/>
                        </div>
                        <div class="item-desc">
                            <h5 style={{fontStyle: "italic", fontFamily: "cursive"}}>Description</h5>
                            <textarea class="lead" disabled style={{fontStyle: "italic", fontFamily: "cursive"}}></textarea>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};