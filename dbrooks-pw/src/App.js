import React from "react";
import LandingPage from "./LandingPage";
import Home from "./Home";
import TechX from "./TechX";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/techX" component={TechX} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
