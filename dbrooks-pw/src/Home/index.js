import React, { useState } from "react";
import { Button } from "@material-ui/core";
import ReactRotatingText from "react-rotating-text";
import { Redirect, useHistory } from "react-router-dom";
import "./home.css";

function LandingPage() {
  const [redirect, setRedirect] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let history = useHistory();

  function routeChange() {
    if (redirect) {
      history.push("/");
      return <Redirect to="/home" />;
    }
  }
  if (!loaded) {
    if (window.screen.width < 850) {
      setTimeout(() => {
        setLoaded(true);
      }, 2300);
    } else {
      setTimeout(() => {
        setLoaded(true);
      }, 5000);
    }
  }
  return (
    <div>
      {loaded ? (
        <div id="landing-div">
          <p className="my-name">Darryl Brooks II</p>
          <p className="is">is</p>
          <p className="rotating-items">
            <ReactRotatingText
              items={[
                'cout<<"Innovative";',
                'cout<<"Ambitious";',
                'cout<<"Extraordinary";',
              ]}
            />
          </p>
          {routeChange()}
          <div className="button">
            <Button
              variant="contained"
              onClick={() => {
                setRedirect(true);
              }}
              style={{
                backgroundColor: "#e2c044",
                textTransform: "capitalize",
                color: "#3f4043",
                fontFamily: "Montserrat",
              }}
            >
              Check out my life
            </Button>
          </div>
        </div>
      ) : (
        <div className="background">
          <p className="loader">Welcome</p>
        </div>
      )}
    </div>
  );
}
export default LandingPage;
