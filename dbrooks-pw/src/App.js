import React from "react";
// import Home from "./Home";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ReactRotatingText from "react-rotating-text";
import "./App.css";

function App() {
  return (
    <div>
      <p>Darryl Brooks II</p>
      <p3>is</p3>
      <p1>
        <ReactRotatingText
          items={[
            'cout<<"Innovative";',
            'cout<<"Relentless";',
            'cout<<"Ambitious";',
          ]}
        />
      </p1>
      <Button variant="contained">Check out my life</Button>
    </div>
  );
}

export default App;
