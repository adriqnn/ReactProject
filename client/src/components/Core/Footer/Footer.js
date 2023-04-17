import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white" style={{fontSize: "18px", fontFamily: "cursive"}}> &copy; All rights reserved.  
                    &nbsp;
                    <Link to="/"> Home </Link>
                    &nbsp;
                    <Link to="/about"> About </Link>
                    &nbsp;
                    <Link to="/contacts"> Contacts </Link>
                    &nbsp;
                    <Link to='https://twitter.com'><i className="fab fa-twitter"></i></Link>
                    &nbsp;
                    <Link to='https://www.facebook.com'><i className="fab fa-facebook-square"></i></Link>
                    &nbsp;
                    <Link to='https://www.instagram.com/'><i className="fab fa-instagram"></i></Link>
                    &nbsp;
                    <Link to='https://www.youtube.com'><i className="fab fa-youtube"></i></Link>
                </p>
            </div>
        </footer>
    );
};