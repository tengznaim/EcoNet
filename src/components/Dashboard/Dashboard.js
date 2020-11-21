import React from 'react';
import "../Dashboard/Dashboard.css";
<<<<<<< HEAD
import { AiOutlineWallet } from 'react-icons/ai';
import { AiOutlineMessage, AiOutlineHome } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import {Link} from 'react-router-dom';


function Dashboard(props){

    function handleLogout(){
        props.history.push("/");
    }
    
=======
import { FaHome } from 'react-icons/fa';

function Dashboard(){
>>>>>>> e5f09e88bf8863b0577cfc8a61a62300b08bd555
    return(
        <div>
            <div className="dashboardMain">
                <div className="leftPanel">
<<<<<<< HEAD
                    <Link to="/dashboard" className="links currentPage">
                        <AiOutlineHome className="icons"/>
                    </Link>
                    <AiOutlineWallet className="icons"/>
                    <AiOutlineMessage className="icons"/>
                    <VscAccount className="icons"/>
                </div>
                <div className="rightContent">
                    <button className="btn" id="logout" onClick={handleLogout}>Logout</button>
                    <h1 id="homeText">What would you like to recycle today?</h1>
=======
                    <FaHome/>
                </div>
                <div className="rightContent">
>>>>>>> e5f09e88bf8863b0577cfc8a61a62300b08bd555
                </div>
            </div>
        </div>
    )
}

export default Dashboard;