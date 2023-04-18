import { Link } from "react-router-dom";

import './Footer.css';

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
                    <Link to="https://github.com/adriqnn/ReactProject/tree/master/client" target="_blank"> Documentation </Link>
                    &nbsp;
                    <Link to='https://twitter.com' target="_blank"><i className="fab fa-twitter"></i></Link>
                    &nbsp;
                    <Link to='https://www.facebook.com' target="_blank"><i className="fab fa-facebook-square"></i></Link>
                    &nbsp;
                    <Link to='https://www.instagram.com/' target="_blank"><i className="fab fa-instagram"></i></Link>
                    &nbsp;
                    <Link to='https://www.youtube.com' target="_blank"><i className="fab fa-youtube"></i></Link>
                </p>
            </div>
        </footer>
    );
};