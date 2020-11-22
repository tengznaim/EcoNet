import "../components/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./LoginRegister/Register";
import Login from "./LoginRegister/Login";
import Dashboard from "./Dashboard/Dashboard";
import Payment from "./Payment/Payment";
import Message from "./Message/Message";
import Account from "./Account/Account";
import Map from "./Map/Map";

function App() {
  const user = {
    username: "",
    recyclables: [{}],
    selectedCenter: "Recycling Center", //remove for demo
  };

  function handleSubmit(input) {
    user.recyclables = [...input];
  }

  function handleLogin(input) {
    user.username = input;
  }

  function handleMessage(input) {
    user.selectedCenter = input;
  }

  return (
    <Router className="App">
      <Switch>
        <Route
          render={(props) => <Register {...props} />}
          exact
          path="/register"
        />
        <Route
          render={(props) => (
            <Dashboard
              {...props}
              username={user.username}
              handleSubmit={handleSubmit}
            />
          )}
          exact
          path="/dashboard"
        />
        <Route
          render={(props) => <Payment {...props} username={user.username} />}
          exact
          path="/payment"
        />
        <Route
          render={(props) => (
            <Message
              {...props}
              username={user.username}
              selectedCenter={user.selectedCenter}
            />
          )}
          exact
          path="/message"
        />
        <Route
          render={(props) => <Account {...props} username={user.username} />}
          exact
          path="/account"
        />
        <Route
          render={(props) => (
            <Map
              {...props}
              username={user.username}
              recyclables={user.recyclables}
              handleMessage={handleMessage}
              selectedCenter={user.selectedCenter}
            />
          )}
          exact
          path="/map"
        />
        <Route
          render={(props) => (
            <Login
              {...props}
              username={user.username}
              handleLogin={handleLogin}
            />
          )}
          exact
          path="/"
        />
      </Switch>
    </Router>
  );
}

export default App;
