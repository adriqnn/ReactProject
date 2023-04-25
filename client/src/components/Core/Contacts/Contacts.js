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
                            <p className="contacts-page-contacts-section-part-p">Call us at: +359-XXX-XX-XX-XX!</p>
                        </div>
                        <div className="contacts-page-contacts-section-separator"></div>
                        <div className="contacts-page-contacts-section-part">
                            <i className="fas fa-envelope"></i>
                            <p className="contacts-page-contacts-section-part-p">Email us at: PizzaBurgerSpot@abv.bg!</p>
                        </div>
                        <div className="contacts-page-contacts-section-separator"></div>
                        <div className="contacts-page-contacts-section-part">
                            <i className="fas fa-comment-dots"></i>
                            <p className="contacts-page-contacts-section-part-p">Message us: with our live chat system!</p>
                        </div>
                    </div>
                </section>
            </main>
            <div className="footer-divider"></div>
        </>
    );
};