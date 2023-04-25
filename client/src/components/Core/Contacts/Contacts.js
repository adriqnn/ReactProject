import './Contacts.css';

export const Contacts = () => {
    return (
        <main className="contacts-main" id="contacts-main">
            <section className="contacts-page-container">
                <div className="contacts-page-header">
                    <h1 className="contacts-page-h1">CONTACT US:</h1>
                </div>
                <div className="contacts-page-contacts-section">
                    <div>
                        <p className="contacts-page-contacts-section-phone">Call us at: +359-XXXX-XX-XX-XX!</p>
                    </div>
                    <div className="contacts-page-contacts-section-separator"></div>
                    <div>
                        <p className="contacts-page-contacts-section-email">Call us at: +359-XXXX-XX-XX-XX!</p>
                    </div>
                    <div className="contacts-page-contacts-section-separator"></div>
                    <div>
                        <p className="contacts-page-contacts-section-message">Call us at: +359-XXXX-XX-XX-XX!</p>
                    </div>
                </div>
            </section>
        </main>
    );
};