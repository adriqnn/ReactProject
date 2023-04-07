import { Link } from "react-router-dom"


export const PizzaIngredient = ({
    _id,
    name,
    type,
    weight,
    picture
}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <img className="card-img-top"
                    src={picture}
                    alt="pizzaIngredient"/>
                <div className="card-body">
                    <h5 className="card-title2"><span>{name}</span></h5>
                    <h5 className="mt-4 card-info"> Type: {type}<span></span></h5>
                    <h5 className="mt-4 card-info"> Weight: {weight}g<span></span></h5>
                </div>
                <div className="card-footer">
                    <Link to={`/pizzas/pizza-ingredients/${_id}`} className="btn btn-success">Details</Link>
                </div>
            </div>
        </div>
    );
};