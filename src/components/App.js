import '../components/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./LoginRegister/Register";
import Login from "./LoginRegister/Login";
import Dashboard from "./Dashboard/Dashboard";
import Payment from "./Payment/Payment";
import Message from "./Message/Message";
import Account from "./Account/Account";
import Map from "./Map/Map";

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
          <Route render={(props) => (<Payment {...props} username = {user.username}/>)} exact path="/payment"/>
          <Route render={(props) => (<Message {...props} username = {user.username}/>)} exact path="/message"/>
          <Route render={(props) => (<Account {...props} username = {user.username}/>)} exact path="/account"/>
          <Route render={(props) => (<Map {...props} username = {user.username} />) } exact path="/map"/>
          <Route render={(props) => (<Login {...props} username = {user.username} handleLogin={handleLogin}/>) } exact path="/"/>
        </Switch>
    </Router>
  );
}

export default App;
  