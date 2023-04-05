import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white" style={{fontSize: "18px", fontFamily: "cursive"}}> &copy; All rights reserved.  
                    <Link to="/"> Home </Link>
                    |
                    <Link to="/about"> About </Link>
                    |
                    <Link to="/contacts"> Contacts </Link>
                </p>
            </div>
        </footer>
    );
};