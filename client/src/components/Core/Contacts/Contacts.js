import { Link } from 'react-router-dom';

import './Contacts.css';

export const Contacts = () => {
    return (
        <>
            <main className="contacts-main" id="contacts-main">
                <section className="contacts-page-container">
                    <div className="contacts-page-header">
                        <h1 className="contacts-page-h1">CONTACT US:</h1>
                    </div>
                    <div className="contacts-page-contacts-section">
                        <div className="contacts-page-contacts-section-part">
                            <i className="fas fa-phone-square-alt"></i>
                            <div>
                                <p className="contacts-page-contacts-section-part-p">Call us:</p>
                                <p className="contacts-page-contacts-section-part-p">+359-XXX-XX-XX-XX!</p>
                            </div>
                        </div>
                        <div className="contacts-page-contacts-section-separator"></div>
                        <div className="contacts-page-contacts-section-part">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <p className="contacts-page-contacts-section-part-p">Email us:</p>
                                <p className="contacts-page-contacts-section-part-p">PizzaBurgerSpot@abv.bg!</p>
                            </div>
                        </div>
                        <div className="contacts-page-contacts-section-separator"></div>
                        <div className="contacts-page-contacts-section-part">
                            <i className="fas fa-comment-dots"></i>
                            <div>
                                <p className="contacts-page-contacts-section-part-p">Message us:</p>
                                <p className="contacts-page-contacts-section-part-p">Live chat system -
                                    <Link to="#" className="contacts-page-contacsts-section-part-link"> Here</Link>!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="footer-divider"></div>
        </>
    );
};