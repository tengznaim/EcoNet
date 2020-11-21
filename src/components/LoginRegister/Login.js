import React, {useState} from 'react';
import '../LoginRegister/formStyle.css';
import { Link } from 'react-router-dom';

function Login(props){

    const[username, setUsername] = useState("");
    const[count, setCount] = useState(0);

    function handleLogin(){
        console.log(username);
        props.history.push("/dashboard")
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
                <div className="inputBox">
                    <input type="text" id="username" value={username} onChange={(e)=> setUsername(e.target.value)}placeholder="Username" autocomplete="off"/>
                </div>
                <div className="inputBox">
                    <input type="password" id="password" placeholder="Password"/>
                </div>

                
                <button className="btn" onClick={handleLogin}>Sign In</button>
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