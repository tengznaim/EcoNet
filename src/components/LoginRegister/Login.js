import React, {useState} from 'react';
import '../LoginRegister/formStyle.css';
import { Link } from 'react-router-dom';

function Login(props){

    const[username, setUsername] = useState("");
    const[count, setCount] = useState(0);

<<<<<<< HEAD
    function onSubmit(){
        props.handleLogin(username);
        props.history.push("/dashboard");
=======
    function handleLogin(){
        console.log(username);
        props.history.push("/dashboard")
>>>>>>> e5f09e88bf8863b0577cfc8a61a62300b08bd555
    }

    return(
        <div>
            <div className="mainWrapper">
            <div className="loginWrapper">
                <Link className="login currentLink" to="/">
                    Sign In
                </Link>{" "}
                or
                <Link className="register" to="/register">
                Register
                </Link>
                <h1 className="loginTitle">Welcome Back!</h1>
<<<<<<< HEAD
                <form onSubmit={onSubmit}>
                    <div className="inputBox">
                        <input type="text" id="username" value={username} onChange={(e)=> setUsername(e.target.value)}placeholder="Username" autocomplete="off"/>
                    </div>
                    <div className="inputBox">
                        <input type="password" id="password" placeholder="Password"/>
                    </div>
                    <button className="btn">Sign In</button>
                </form>
=======
                <div className="inputBox">
                    <input type="text" id="username" value={username} onChange={(e)=> setUsername(e.target.value)}placeholder="Username" autocomplete="off"/>
                </div>
                <div className="inputBox">
                    <input type="password" id="password" placeholder="Password"/>
                </div>

                
                <button className="btn" onClick={handleLogin}>Sign In</button>
>>>>>>> e5f09e88bf8863b0577cfc8a61a62300b08bd555
                {/*
                <h2>Number: { count } </h2>
                <button className="btn" onClick= {() => setCount(count + 1)}>
                    Increment one
                </button>
                <button className="btn" onClick= {() => setCount(count - 1)}>
                    Decrement one
                </button>
                */}
            </div>
            </div>
        </div>
    )
}

export default Login;