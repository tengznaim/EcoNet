import React, {useState} from 'react';
import "../Message/Message.css";
import Panel from "../sidePanel";

function Message(props) {

    return (
        <div className="dashboardMain">
            <Panel/>
            <div className="rightContent">

            </div>
        </div>
    )

}

export default Message;