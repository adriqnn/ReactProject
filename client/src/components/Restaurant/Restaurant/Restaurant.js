import { Link } from "react-router-dom";

export const Restaurant = ({
    _id,
    name,
    address,
    picture,
    rating 
}) => {
    return (
        <div className="item-card">
            <div className="item-card-container">
                <div className="item-card-container-div-img">
                    <img className="item-card-container-img" src={picture} alt="restaurant"/>
                </div>
                <div className="item-card-container-divider-line"></div>
                <div className="item-card-container-main">
                    <h1 className="item-card-container-main-h1">{name}</h1>
                    <h2 className="item-card-container-main-h2"> Address: {address}</h2>
                    <h2 className="item-card-container-main-h2"> Rating: {rating}</h2>
                </div>
                <div className="item-card-container-footer">
                    <Link to={`/restaurants/item/${_id}`} className="item-card-container-footer-btn">Details</Link>
                </div>
            </div>
        </div>
    );
};