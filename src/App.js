import React from "react";
import LandingPage from "./Home";
import About from "./About";
import TechX from "./TechX";
import Contact from "./Contact";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" exact component={About} />
            <Route path="/techX" exact component={TechX} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
