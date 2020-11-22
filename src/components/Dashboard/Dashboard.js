import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Panel from "../sidePanel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  function handleLogout() {
    props.history.push("/");
  }

  const [inputList, setInputList] = useState([{ item: "", quantity: "" }]);

  function addField() {
    setInputList([...inputList, { item: "", quantity: "" }]);
  }

  const removeField = (index) => {
    const values = [...inputList];
    values.splice(index, 1);
    setInputList(values);
  };

  function handleSubmit() {
    props.handleSubmit(inputList);
    props.history.push("/map");
  }

  const handleInput = (index, event) => {
    console.log(event.target);
    const values = [...inputList];
    console.log(values);
    values[index][event.target.name] = event.target.value;
    setInputList(values);
  };

  return (
    <div className="dashboardMain">
      <Panel />
      <div className="rightContent">
        <button className="btn" id="logout" onClick={handleLogout}>
          Logout
        </button>
        <div className="contentWrapper">
          {props.username ? <span>Hi {props.username}!</span> : null}
          <h1 id="homeText">What would you like to recycle today?</h1>
          <form className={classes.root} action="">
            {inputList.map((input, index) => (
              <div key={index}>
                <TextField
                  name="item"
                  id="text-input"
                  variant="outlined"
                  label="Item eg. Plastic Bottle"
                  value={input.item}
                  onChange={(event) => handleInput(index, event)}
                />
                <TextField
                  name="quantity"
                  id="text-input"
                  variant="outlined"
                  label="Approx. Weight eg. 1kg"
                  value={input.quantity}
                  onChange={(event) => handleInput(index, event)}
                />
                <IconButton onClick={(index) => removeField()}>
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={addField}>
                  <AddIcon />
                </IconButton>
              </div>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.button}>
              Recycle!
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
