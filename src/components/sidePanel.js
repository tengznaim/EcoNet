import React, { useState } from "react";
import "../components/Dashboard/Dashboard.css";
import { AiOutlineWallet } from "react-icons/ai";
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Panel(props) {
  return (
    <div className="leftPanel">
      <div className="iconGroup">
        <Link to="/dashboard" className="links">
          <AiOutlineHome className="icons" />
          <h1 className="leftPanelText">Home</h1>
        </Link>
        <Link to="/payment" className="links">
          <AiOutlineWallet className="icons" />
          <h1 className="leftPanelText">Payment</h1>
        </Link>
        <Link to="/message" className="links">
          <AiOutlineMessage className="icons" />
          <h1 className="leftPanelText">Messages</h1>
        </Link>
        <Link to="/account" className="links">
          <VscAccount className="icons" />
          <h1 className="leftPanelText">Account</h1>
        </Link>
      </div>
    </div>
  );
}

export default Panel;
