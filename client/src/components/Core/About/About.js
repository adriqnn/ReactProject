import './About.css';

export const About = () => {
    return (
        <>
            <main className="about-main" id="about-main">
                <section className="about-page-title">
                    <div className="about-page-title-div">
                        <h1 className="about-page-title-h1">PizzaBurgerSpot React Client Side Project</h1>
                    </div>
                </section>
                <section className="about-page-container">
                    <div className="about-page-header">
                        <h1 className="about-page-header-h1">ABOUT:</h1>
                    </div>
                    <div className="about-page-line"></div>
                    <div className="about-page-project-description">
                        <p className="about-page-project-description-p">This is a small react client-side application called PizzaBurgerSpot for managing collections of pizzas, burgers and restaurants - created by the users. The application runs with it's own REST-api server made with ExpressJS and is connected to a NoSQL database - MongoDB.</p>
                    </div>
                    <div className="about-page-line"></div>
                    <div className="about-page-project-technologies">
                        <div className="about-page-project-technologies-client">
                            <p className="about-page-project-technologies-p">1. React Client:</p>
                            <ul className="about-page-project-technologies-ul">
                                <li className="about-page-project-technologies-li">react: 18.2.0;</li>
                                <li className="about-page-project-technologies-li">react-dom: 18.2.0;</li>
                                <li className="about-page-project-technologies-li">react-router-dom: 6.10.0;</li>
                                <li className="about-page-project-technologies-li">react-scripts: 5.0.1;</li>
                            </ul>
                        </div>
                        <div className="about-page-project-technologies-server">
                            <p className="about-page-project-technologies-p">2. ExpressJS Server:</p>
                            <ul className="about-page-project-technologies-ul">
                                <li className="about-page-project-technologies-li">bcrypt: 5.1.0;</li>
                                <li className="about-page-project-technologies-li">cookie-parser: 1.4.6;</li>
                                <li className="about-page-project-technologies-li">cors: 2.8.5;</li>
                                <li className="about-page-project-technologies-li">express: 4.18.2;</li>
                                <li className="about-page-project-technologies-li">express-validator: 6.14.2;</li>
                                <li className="about-page-project-technologies-li">jsonwebtoken: 8.5.1;</li>
                                <li className="about-page-project-technologies-li">mongoose: 6.8.0;</li>
                                <li className="about-page-project-technologies-li">validator: 13.7.0;</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-page-line"></div>
                    <div className="about-page-general-information">
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">1. Dynamic Pages:</p>
                            <ul className="about-page-general-information-ul">
                                <li className="about-page-general-information-li">Profile Page;</li>
                                <li className="about-page-general-information-li">Burgers Page;</li>
                                <li className="about-page-general-information-li">Burger Details Page;</li>
                                <li className="about-page-general-information-li">Burger Ingredients Page;</li>
                                <li className="about-page-general-information-li">Burger Ingredient Details Page;</li>
                                <li className="about-page-general-information-li">Pizzas Page;</li>
                                <li className="about-page-general-information-li">Pizza Details Page;</li>
                                <li className="about-page-general-information-li">Pizza Ingredients Page;</li>
                                <li className="about-page-general-information-li">Pizza Ingredient Details Page;</li>
                                <li className="about-page-general-information-li">Restaurants Page;</li>
                                <li className="about-page-general-information-li">Restaurant Details Page;</li>
                            </ul>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">2. Specific Views:</p>
                            <ul className="about-page-general-information-ul">
                                <li className="about-page-general-information-li">Burgers Catalog and Burger Details;</li>
                                <li className="about-page-general-information-li">Burger Ingredients Catalog and Burger Ingredient Details;</li>
                                <li className="about-page-general-information-li">Pizza Catalog and Pizza Details;</li>
                                <li className="about-page-general-information-li">Pizza Ingredients Catalog and Pizza Ingredient Details;</li>
                                <li className="about-page-general-information-li">Restaurant Catalog and Restaurant Details;</li>
                            </ul>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">3. CRUD Collections:</p>
                            <ul className="about-page-general-information-ul">
                                <li className="about-page-general-information-li">Users - Create, Read and Update;</li>
                                <li className="about-page-general-information-li">Burgers - Create, Read, Delete and Like/Unlike Functionality;</li>
                                <li className="about-page-general-information-li">Pizzas - Create, Read, Delete and Like/Unlike Functionality;</li>
                                <li className="about-page-general-information-li">Restaurants - Create, Read, Update and Delete;</li>
                            </ul>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">4. Using React for client-side;</p>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">5. Using REST-api server connected to MongoDB;</p>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">6. User Authentication, authorized requests and guest/user guards;</p>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">7. Client-side routing in App.js with react-router-dom;</p>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">8. Application has statefull and stateless components, bound forms, component styling and other;</p>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">9. Used GitHub for the application source control;</p>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">10. Application has data validation for the forms and error handling for the server requests and other parts where it is needed;</p>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">11. Application is divided into multiple components with separate css files;</p>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">12. Application has documentation for the setup, use and functionality;</p>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">13. Application has 4 contexts:</p>
                            <ul className="about-page-general-information-ul">
                                <li className="about-page-general-information-li">ApplicationContext;</li>
                                <li className="about-page-general-information-li">BurgerContext;</li>
                                <li className="about-page-general-information-li">PizzaContext;</li>
                                <li className="about-page-general-information-li">RestaurantContext;</li>
                            </ul>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">14. Application has some other features:</p>
                            <ul className="about-page-general-information-ul">
                                <li className="about-page-general-information-li">Hooks;</li>
                                <li className="about-page-general-information-li">Guards;</li>
                            </ul>    
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">15. Good UI/UX;</p>
                        </div>
                        <div className="about-page-general-information-div">
                            <p className="about-page-general-information-main-p">16. Used Google Drive to store Assets;</p>
                        </div>
                    </div>
                </section>
            </main>
            <div className="footer-divider"></div>
        </>
    );
};