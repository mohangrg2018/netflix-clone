import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/screen/HomeScreen";
import LoginScreen from "./components/screen/LoginScreen";

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
