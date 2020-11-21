import '../components/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./LoginRegister/Register";
import Login from "./LoginRegister/Login";
import Dashboard from "./Dashboard/Dashboard";

function App() {

  const user = {
    username: ""
  }

  function handleLogin(input){
    user.username = input;
  }

  return (
    <Router className="App">
        <Switch>
          <Route render={(props) => (<Register {...props}/>)} exact path="/register"/>
          <Route render={(props) => (<Dashboard {...props} username = {user.username}/>)} exact path="/dashboard"/>
          <Route render={(props) => (<Login {...props} username = {user.username} handleLogin={handleLogin}/>) } exact path="/"/>
        </Switch>
    </Router>
  );
}

export default App;
  