import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { BurgerContext } from "../../../contexts/BurgerContext";

export const Burger = ({
    _id,
    picture,
    name,
    weight,
    likes
}) => {
    const { auth, isAuthenticated } = useContext(ApplicationContext);
    const { onLikeBurger, onUnlikeBurger } = useContext(BurgerContext);

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
                    <img className="item-card-container-img" src={picture} alt="burger"/>
                </div>
                <div className="item-card-container-divider-line"></div>
                <div className="item-card-container-main">
                    <h1 className="item-card-container-main-h1">{name}</h1>
                    <h2 className="item-card-container-main-h2"> Weight: {weight}g</h2>
                    {
                        (isAuthenticated && !userHasAlreadyLiked()) &&(
                            <>
                                <h2 className="item-card-container-main-h2" onClick={() => onLikeBurger(_id, auth.user._id)}> 
                                    Like: <i className="fas fa-heart" style={{color: "#0477b6"}}></i> {likes.length}
                                </h2>
                            </>
                        )
                    }
                    {
                        (isAuthenticated && userHasAlreadyLiked()) && (
                            <>
                                <h2 className="item-card-container-main-h2" onClick={() => onUnlikeBurger(_id, auth.user._id)}> 
                                    Liked: <i className="fas fa-heart" style={{color: "red"}}></i> {likes.length}
                                </h2>
                            </>
                        )
                    }
                    {
                        !isAuthenticated && (
                            <>
                                <h2 className="item-card-container-main-h2"> 
                                    Likes: <i className="fas fa-heart" style={{color: "whitesmoke"}}></i> {likes.length}
                                </h2>
                            </>
                        )
                    }
                </div>
                <div className="item-card-container-footer">
                    <Link to={`/burgers/item/${_id}`} className="item-card-container-footer-btn">Details</Link>
                </div>
            </div>
        </div>
    );
};