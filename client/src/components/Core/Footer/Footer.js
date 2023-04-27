import { Link } from "react-router-dom";

import './Footer.css';

export const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-container">
                <div className="socials-links-container">
                    <ul className="socials-links">
                        <li className="socials-link-li"><Link className="socials-link socials-link-twitter" to='https://twitter.com' target="_blank"><i className="fab fa-twitter"></i></Link></li>
                        <li className="socials-link-li"><Link className="socials-link socials-link-facebook" to='https://www.facebook.com' target="_blank"><i className="fab fa-facebook-square"></i></Link></li>
                        <li className="socials-link-li"><Link className="socials-link socials-link-instagram" to='https://www.instagram.com/' target="_blank"><i className="fab fa-instagram"></i></Link></li>
                        <li className="socials-link-li"><Link className="socials-link socials-link-youtube" to='https://www.youtube.com' target="_blank"><i className="fab fa-youtube"></i></Link></li>
                        <li className="socials-link-li"><Link className="socials-link socials-link-linkedin" to='https://www.linkedin.com' target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                    </ul>
                </div>
                <div className="page-links-container">
                    <ul className="page-links">
                        <li className="page-link-li"><Link className="page-link" to="/">Home</Link></li>
                        <li className="page-link-li"><Link className="page-link" to="/about">About</Link></li>
                        <li className="page-link-li"><Link className="page-link" to="/contacts">Contacts</Link></li>
                        <li className="page-link-li"><Link className="page-link" to="https://github.com/adriqnn/ReactProject/tree/master/client" target="_blank">Documentation</Link></li>
                    </ul>
                </div>
                <div className="copyright">
                    <p className="copyright-p"><span className="copyright-span">&copy;</span> All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};