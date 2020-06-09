import React, { useState } from "react";
import LandingPage from "./Home";
import About from "./About";
import TechX from "./TechX/";
import Contact from "./Contact";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { db } from "./firebase";

function App() {
  const [res, setRes] = useState(undefined);

  const getInfo = () => {
    db.collection("Mandatum")
      .doc("FlUukImoonkI8HEKJVkN")
      .get()
      .then((resp) => {
        setRes(resp.data());
      });
  };
  if (res === undefined) {
    getInfo();
  }
  return (
    <div>
      {res !== undefined ? (
        <Router>
          <Switch>
            <Route path="/" exact render={() => <LandingPage />} />
            <Route path="/home" render={() => <About />} />
            <Route path="/techX" render={() => <TechX />} />
            <Route path="/contact" render={() => <Contact info={res} />} />
          </Switch>
        </Router>
      ) : (
        <div>
          <img
            style={{ width: "auto", height: "auto" }}
            src={require("./images/loading.gif")}
          />
        </div>
      )}
    </div>
  );
}

export default App;
