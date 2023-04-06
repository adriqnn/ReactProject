export const Register = () => {

    return (
        <main>
            <section className="py-5" id="register-page">
                <div className="container register-page">
                    <h1 style={{fontFamily: "cursive"}}>
                        <h1 style={{fontFamily: "cursive", color: "gold", textDecoration: "underline"}}>Pizza & Burger Spot</h1>
                        <p className="lead" style={{fontStyle: "italic", fontFamily: "cursive"}}>Register...</p>
                        <p> </p>
                        <p className="line"></p>
                    </h1>
                    <p>&nbsp;</p>
                    <div className="register">
                        <form>

                            {/* <>
                                <div className="form-group">
                                    <ng-container>{{removeMsg()}}</ng-container>
                                    <label for="error" style="color: red;">{{msg}}</label>
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
                                <label for="email">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Email" name="email" value=""/>
                            </div>

                            {/* <>
                                <>
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Email is required!</label>
                                    </div>
                                </>
                                <>
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Email must be at least 3 characters!</label>
                                    </div>
                                </>
                                <>
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Email is not valid!</label>
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
                                <label for="rePassword">Confirm Password</label>
                                <input type="password" className="form-control" id="rePassword" placeholder="Confirm Password" name="repass" value=""/>
                            </div>

                            {/* <>
                                <>
                                    <div className="form-group">
                                        <label for="error" style="color: red;">Passwords must match!</label>
                                    </div>
                                </>
                            </> */}

                            <div className="form-group">
                                <p>Already have account? <a routerLink="/auth/login" style={{fontSize: "20px", color: "greenyellow"}}>Login Now!</a></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};