import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { PizzaContext } from "../../../contexts/PizzaContext";

export const Pizza = ({
    _id,
    picture,
    name,
    weight,
    likes
}) => {
    const { auth, isAuthenticated } = useContext(ApplicationContext);
    const { onLikePizza, onUnlikePizza } = useContext(PizzaContext);

    const userHasAlreadyLiked = () => {
        if(auth.user){
            if(likes.includes(auth.user._id)){
                return true;
            }else{
                return false;
            }
        }else{
            return false
        };
    };

    return (
        <div className="item-card">
            <div className="item-card-container">
                <div className="item-card-container-div-img">
                    <img className="item-card-container-img" src={picture} alt="pizzaIngredient"/>
                </div>
                <div className="item-card-container-main">
                    <h5 className="item-card-container-main-h1">{name}</h5>
                    <h5 className="item-card-container-main-h2"> Weight: {weight}g</h5>
                    {
                        (isAuthenticated && !userHasAlreadyLiked()) &&(
                            <>
                                <h5 className="item-card-container-main-h2" onClick={() => onLikePizza(_id, auth.user._id)}> 
                                    Like: <i className="fas fa-heart"></i> {likes.length}
                                </h5>
                            </>
                        )
                    }
                      {
                        (isAuthenticated && userHasAlreadyLiked()) && (
                            <>
                                <h5 className="item-card-container-main-h2" onClick={() => onUnlikePizza(_id, auth.user._id)}> 
                                    Liked: <i className="fas fa-heart" style={{color: "red"}}></i> {likes.length}
                                </h5>
                            </>
                        )
                    }
                    {
                        !isAuthenticated && (
                            <>
                                <h5 className="item-card-container-main-h2"> 
                                    Likes <i className="fas fa-heart" style={{color: "whitesmoke"}}></i> {likes.length}
                                </h5>
                            </>
                        )
                    }
                </div>
                <div className="item-card-container-footer">
                    <Link to={`/pizzas/item/${_id}`} className="item-card-container-footer-btn">Details</Link>
                </div>
            </div>
        </div>
    );
};