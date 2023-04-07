import { useContext } from "react";
import { ApplicationContext } from "../../../contexts/ApplicationContext";

export const Profile = () => {

    const { auth } = useContext(ApplicationContext);

    return (
        <main>
            <section className="profile col-md-6 text-center col-lg" id="profile-page">
                <div className="profile-container">
                    <img className="profile-img" src="/assets/pictures/main/profilepic.png" alt="profile"/>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "20px", color: "greenyellow"}}>Username: {auth.user.username}<span></span></p>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "20px", color: "greenyellow"}}>Email: {auth.user.email}<span></span></p>
                    <p style={{fontStyle: "italic", fontFamily: "cursive", fontSize: "18px", color: "greenyellow"}}>Created at: {auth.user.createdAt}<span></span></p>
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