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
      <div style={{position: 'absolute', bottom: '20%', left: '44%'}}>
        <Button variant="contained" style={{backgroundColor: '#e2c044', textTransform: 'capitalize',color:'#3f4043',fontFamily: 'Montserrat'}}>Check out my life</Button>
      </div>
    </div>
  );
}

export default App;
