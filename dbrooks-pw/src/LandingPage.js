import React, { useState } from "react";
import { Button } from "@material-ui/core";
import ReactRotatingText from "react-rotating-text";
import { Redirect } from "react-router-dom";
import history from "../src/history";
function LandingPage() {
  const [redirect, setRedirect] = useState(false);

  function routeChange() {
    if (redirect) {
      history.push("/");
      return <Redirect to="/home" />;
    }
  }

  return (
    <div>
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
  );
}
export default LandingPage;
