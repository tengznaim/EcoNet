import React from 'react';
import "../Dashboard/Dashboard.css";
import { FaHome } from 'react-icons/fa';

function Dashboard(){
    return(
        <div>
            <div className="dashboardMain">
                <div className="leftPanel">
                    <FaHome/>
                </div>
                <div className="rightContent">
                </div>
            </div>
        </div>
    )
}

export default Dashboard;