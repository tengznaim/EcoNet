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
            </div>
            </div>
        </div>
    )
}

export default Register;