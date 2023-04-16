import { useContext } from "react";
import { Link } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";

export const Header = () => {
    const { auth, isAuthenticated } = useContext(ApplicationContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link to="/">
                    <img className="car logo" src="/assets/pictures/main/animepizza.png" alt="pizza-logo"/>
                    <img className="logo" src="/assets/pictures/main/animeburger.png" alt="burger-logo"/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarResponsive" style={{fontSize: "18px", fontFamily: "cursive"}}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pizzas">Pizza</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/burgers">Burger</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/restaurants">Restaurants</Link>
                        </li>
                        {
                            !isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/auth/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/auth/register">Register</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/auth/profile">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/auth/logout">Logout as {auth.user.email}</Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};