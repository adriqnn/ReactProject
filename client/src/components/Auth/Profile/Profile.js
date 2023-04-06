export const Profile = () => {
    return (
        <main>
            <section class="profile col-md-6 text-center col-lg" id="profile-page">
                <div class="profile-container">
                    <img class="profile-img" src="/assets/pictures/main/profilepic.png"/>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "20px", color: "greenyellow"}}>Username: <span></span></p>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "20px", color: "greenyellow"}}>Email: <span></span></p>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "18px", color: "greenyellow"}}>Created at: <span></span></p>
                </div>
                <div class="profile-info">

                    {/* <>
                        <p> <span></span> Total Burgers and Pizzas -> {{userBurgers.length + userPizzas.length}}</p>
                    </>
                    <>
                        <p> <span></span> Total Burgers and Pizzas -> No Records!</p>
                    </> */}

                    <p class="line"></p>
                    <div class="trips-info">

                        {/* <>
                            <p style="font-family: cursive; color: gold; text-decoration: underline;">Burgers:</p>
                            <>
                                <p>{{burger.name}}</p>
                            </>
                        </> */}

                        <p class="line"></p>

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