import React, {useState} from 'react';
import "../Dashboard/Dashboard.css";
import { AiOutlineWallet } from 'react-icons/ai';
import { AiOutlineMessage, AiOutlineHome } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import {Link} from 'react-router-dom';
import {Button, TextField} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Panel from "../sidePanel";

function Dashboard(props){

    function handleLogout(){
        props.history.push("/");
    }

    const[inputList, setInputList] = useState([{item:""}]);

    function addField() {
        setInputList([...inputList, {item:""}]);
    }

    const removeField = (index) => {
        const values = [...inputList];
        values.splice(index,1);
        setInputList(values);
    }

    function handleSubmit(){
        props.history.push("/map");
    }
    
    return(
        <div className="dashboardMain">
            <Panel />
            <div className="rightContent">
                <button className="btn" id="logout" onClick={handleLogout}>Logout</button>
                <h1 id="homeText">What would you like to recycle today?</h1>
                <form action="">
                    <div className="formWrapper">
                        {inputList.map((input, index) => (
                        <div key={index}>
                            <TextField id="text-input" variant="outlined" label="Item eg. Plastic Bottle" value={input.item}/>
                             <IconButton onClick={(index) => removeField()}>
                                <RemoveIcon/>
                            </IconButton>
                            <IconButton onClick={addField}>
                                <AddIcon/>
                            </IconButton>
                            </div>
                        ))}
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Recycle!
                        </Button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Dashboard;