import { useContext } from "react";
import { Link } from "react-router-dom";

import { ApplicationContext } from "../../../contexts/ApplicationContext";
import './Header.css';

export const Header = () => {
    const { auth, isAuthenticated } = useContext(ApplicationContext);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo-list-name">
                    <ul className="navbar-logo-list">
                        <li><i class="fas fa-hamburger"></i></li>
                        <li><i class="fas fa-pizza-slice"></i></li>
                    </ul>
                    <p className="navbar-name">PizzaBurgerSpot</p>
                </Link>
                <div className="navbar-links-container">
                    <ul className="navbar-links">
                        <li className="nav-link-li">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-link-li">
                            <Link className="nav-link" to="/pizzas">Pizza</Link>
                        </li>
                        <li className="nav-link-li">
                            <Link className="nav-link" to="/burgers">Burger</Link>
                        </li>
                        <li className="nav-link-li">
                            <Link className="nav-link" to="/restaurants">Restaurants</Link>
                        </li>
                        {
                        isAuthenticated && (
                            <>
                                <li className="nav-link-li">
                                    <Link className="nav-link" to="/auth/profile">Profile</Link>
                                </li>
                            </>
                        )
                    }
                    </ul>
                    {
                        !isAuthenticated && (
                            <div className="btn-container">
                                <Link className="btn-nav" to="/auth/login">Login</Link>
                                <Link className="btn-nav" to="/auth/register">Register</Link>
                            </div>
                        )
                    }
                    {
                        isAuthenticated && (
                            <div className="btn-container">
                                <Link className="btn-nav" to="/auth/logout">Logout</Link>
                                <p className="btn-container-p">{auth.user.email}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    );
};