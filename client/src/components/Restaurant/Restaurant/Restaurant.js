import { Link } from "react-router-dom";

export const Restaurant = ({
    _id,
    name,
    address,
    picture,
    rating 
}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <img className="card-img-top2"
                    src={picture}
                    alt="pizzaIngredient"/>
                <div className="card-body">
                    <h5 className="card-title2"><span>{name}</span></h5>
                    <h5 className="mt-4 card-info"> Address: {address}<span></span></h5>
                    <h5 className="mt-4 card-info"> Rating: {rating}<span></span></h5>
                </div>
                <div className="card-footer">
                    <Link to={`/restaurants/item/${_id}`} className="btn btn-success">Details</Link>
                </div>
            </div>
        </div>
    );
};