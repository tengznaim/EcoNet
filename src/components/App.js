import '../components/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./LoginRegister/Register";
import Login from "./LoginRegister/Login";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <Router className="App">
        <Switch>
          <Route render={(props) => (<Register {...props}/>)} exact path="/register"/>
          <Route render={(props) => (<Dashboard {...props}/>)} exact path="/dashboard"/>
          <Route render={(props) => (<Login {...props}/>)} exact path="/"/>
        </Switch>
    </Router>
  );
}

export default App;
  