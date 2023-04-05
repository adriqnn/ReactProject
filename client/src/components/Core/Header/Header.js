import { Link } from "react-router-dom"

export const Header = () => {
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
                            <Link className="nav-link" to="/pizzas">Pizzas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/burgers">Burgers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/auth/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/auth/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/auth/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/auth/logout">Logout as ...</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};