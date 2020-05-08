import React from "react";
import LandingPage from "./LandingPage";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
