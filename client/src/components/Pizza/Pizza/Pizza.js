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
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <img className="card-img-top"
                    src={picture}
                    alt="pizzaIngredient"/>
                <div className="card-body">
                    <h5 className="card-title2"><span>{name}</span></h5>
                    <h5 className="mt-4 card-info"> Weight: {weight}g<span></span></h5>
                    {
                        (isAuthenticated && !userHasAlreadyLiked()) &&(
                            <>
                                <h5 className="mt-4 card-info" onClick={() => onLikePizza(_id, auth.user._id)}> 
                                    Like: <i className="fas fa-heart"></i> {likes.length}<span></span>
                                </h5>
                            </>
                        )
                    }
                      {
                        (isAuthenticated && userHasAlreadyLiked()) && (
                            <>
                                <h5 className="mt-4 card-info" onClick={() => onUnlikePizza(_id, auth.user._id)}> 
                                    Liked: <i className="fas fa-heart" style={{color: "red"}}></i> {likes.length}<span></span>
                                </h5>
                            </>
                        )
                    }
                    {
                        !isAuthenticated && (
                            <>
                                <h5 className="mt-4 card-info"> 
                                    Likes <i className="fas fa-heart" style={{color: "white"}}></i> {likes.length}<span></span>
                                </h5>
                            </>
                        )
                    }
                </div>
                <div className="card-footer">
                    <Link to={`/pizzas/item/${_id}`} className="btn btn-success">Details</Link>
                </div>
            </div>
        </div>
    );
};