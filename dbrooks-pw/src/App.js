import React from "react";
import LandingPage from "./Home";
import About from "./About";
import TechX from "./TechX/";
import Contact from "./Contact";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router basename="/">
        <Switch>
          <Route path="/" exact render={() => <LandingPage />} />
          <Route path="/home" exact render={() => <About />} />
          <Route path="/techX" exact render={() => <TechX />} />
          <Route path="/contact" exact render={() => <Contact />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
