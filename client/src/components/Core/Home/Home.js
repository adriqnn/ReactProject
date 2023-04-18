import './Home.css';

export const Home = () => {
    return (
        <main>
            <section id="home-page" className="py-5" >
                <div style={{height: "10vh"}}></div>
                <div className="container home" >
                    <h1 style={{fontSize: "36px", fontFamily: "cursive", color: "gold"}}>Pizza & Burger Spot</h1>
                    <p className="line"></p>
                    <div>
                        <p>...</p>
                        <p className="lead">"Best Burgers and Pizzas in the business!"</p>
                        <p className="lead">"Come and visit us!"</p>
                    </div>
                </div>
            </section>
        </main>
    );
};