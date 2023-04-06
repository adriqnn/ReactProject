export const Profile = () => {
    return (
        <main>
            <section className="profile col-md-6 text-center col-lg" id="profile-page">
                <div className="profile-container">
                    <img className="profile-img" src="/assets/pictures/main/profilepic.png"/>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "20px", color: "greenyellow"}}>Username: <span></span></p>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "20px", color: "greenyellow"}}>Email: <span></span></p>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "18px", color: "greenyellow"}}>Created at: <span></span></p>
                </div>
                <div className="profile-info">

                    {/* <>
                        <p> <span></span> Total Burgers and Pizzas -> {{userBurgers.length + userPizzas.length}}</p>
                    </>
                    <>
                        <p> <span></span> Total Burgers and Pizzas -> No Records!</p>
                    </> */}

                    <p className="line"></p>
                    <div className="trips-info">

                        {/* <>
                            <p style="font-family: cursive; color: gold; text-decoration: underline;">Burgers:</p>
                            <>
                                <p>{{burger.name}}</p>
                            </>
                        </> */}

                        <p className="line"></p>

                        {/* <>
                            <p style="font-family: cursive; color: gold; text-decoration: underline;">Pizzas:</p>
                            <>
                                <p>{{pizza.name}}</p>
                            </>
                        </> */}

                    </div>
                </div>
            </section>
        </main>
    );
};