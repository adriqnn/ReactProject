import '../../../App.css';

export const Login = () => {

    return (
        <main>
            <section className="py-5" id="login-page">
                <div className="container login-page">
                    <h1 style={{fontFamily: "cursive"}}>
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Login...</p>
                        <p> </p>
                        <p className="line"></p>
                    </h1>
                    <p>&nbsp;</p>
                    <div className="login">
                        <form>

                            {/* <>
                                <div className="form-group">
                                    <ng-container>{{removeMsg()}}</ng-container>
                                    <label for="error" style="color: red;">{{msg}}</label>
                                </div>
                            </>

                            <>
                                <div className="form-group">
                                    <ng-container>{{removeMsg()}}</ng-container>
                                    <label for="error" style="color: red;">{{redirectMsg}}</label>
                                </div>
                            </> */}

                            <div className="form-group">
                                <label for="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Username" name="username" value=""/>
                            </div>

                            {/* <>
                                <>
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Username is required!</label>
                                    </div>
                                </>
                                <>
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Username must be at least 3 characters!</label>
                                    </div>
                                </>
                            </> */}

                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" name="password" value=""/>
                            </div>

                            {/* <>
                                <>
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Password is required!</label>
                                    </div>
                                </>
                                <>
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Password must be at least 3 characters!</label>
                                    </div>
                                </>
                            </> */}

                            <div className="form-group">
                                <p>Not registered yet? <a routerLink="/auth/register" style={{fontSize: "20px", color: "greenyellow"}}>Register Now!</a></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};