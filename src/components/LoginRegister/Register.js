import React from 'react';
import '../LoginRegister/formStyle.css';
import {Link} from 'react-router-dom';

function Register(props){

    function handleRegister(){
        props.history.push("/");
    }

    return(
        <div>
            <div className="mainWrapper">
            <div class="loginWrapper">
<<<<<<< HEAD
                <Link className="login" to="/">
                    Sign In
                </Link>{" "}
                or
                <Link className="register currentLink" to="/register">
                Register
                </Link>
                <h1 className="regTitle">Register an Account</h1>
                <form onSubmit={handleRegister}>
                    <div class="inputBox">
                        <input type="text" name="" id="email" placeholder="Email" autocomplete="off"/>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" id="username" placeholder="Username" autocomplete="off"/>
                    </div>
                    <div class="inputBox">
                        <input type="password" name="" id="password" placeholder="Password"/>
                    </div>
                    <button className="btn">Register</button>
                </form>
=======
                <h1 className="regTitle">Register an Account</h1>
                <div class="inputBox">
                    <input type="text" name="" id="email" placeholder="Email" autocomplete="off"/>
                </div>
                <div class="inputBox">
                    <input type="text" name="" id="username" placeholder="Username" autocomplete="off"/>
                </div>
                <div class="inputBox">
                    <input type="password" name="" id="password" placeholder="Password"/>
                </div>
                <button className="btn" onClick={handleRegister}>Register</button>
>>>>>>> e5f09e88bf8863b0577cfc8a61a62300b08bd555
            </div>
            </div>
        </div>
    )
}

export default Register;