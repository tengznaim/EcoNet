import '../components/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./LoginRegister/Register";
import Login from "./LoginRegister/Login";
import Dashboard from "./Dashboard/Dashboard";

function App() {
<<<<<<< HEAD

  const user = {
    username: ""
  }

  function handleLogin(input){
    user.username = input;
  }

=======
>>>>>>> e5f09e88bf8863b0577cfc8a61a62300b08bd555
  return (
    <Router className="App">
        <Switch>
          <Route render={(props) => (<Register {...props}/>)} exact path="/register"/>
<<<<<<< HEAD
          <Route render={(props) => (<Dashboard {...props} username = {user.username}/>)} exact path="/dashboard"/>
          <Route render={(props) => (<Login {...props} username = {user.username} handleLogin={handleLogin}/>) } exact path="/"/>
=======
          <Route render={(props) => (<Dashboard {...props}/>)} exact path="/dashboard"/>
          <Route render={(props) => (<Login {...props}/>)} exact path="/"/>
>>>>>>> e5f09e88bf8863b0577cfc8a61a62300b08bd555
        </Switch>
    </Router>
  );
}

export default App;
  