import React from "react";
import LandingPage from "./LandingPage";
import Home from "./Home";
import TechX from "./TechX";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/techX" exact component={TechX} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
