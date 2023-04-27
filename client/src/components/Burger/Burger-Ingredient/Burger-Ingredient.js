import { Link } from "react-router-dom"

export const BurgerIngredient = ({
    _id,
    name,
    type,
    weight,
    picture
}) => {
    return (
        <div className="item-card">
            <div className="item-card-container">
                <div className="item-card-container-div-img">
                    <img className="item-card-container-img" src={picture} alt="burgerIngredient"/>
                </div>
                <div className="item-card-container-main">
                    <h1 className="item-card-container-main-h1">{name}</h1>
                    <h2 className="item-card-container-main-h2"> Type: {type}</h2>
                    <h2 className="item-card-container-main-h2"> Weight: {weight}g</h2>
                </div>
                <div className="item-card-container-footer">
                    <Link to={`/burgers/burger-ingredients/${_id}`} className="item-card-container-footer-btn">Details</Link>
                </div>
            </div>
        </div>
    );
};