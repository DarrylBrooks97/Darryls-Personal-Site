import React, { useState } from "react";
import { Button } from "@material-ui/core";
import ReactRotatingText from "react-rotating-text";
import { Redirect, useHistory } from "react-router-dom";

function LandingPage() {
  const [redirect, setRedirect] = useState(false);
  let history = useHistory();

  function routeChange() {
    if (redirect) {
      history.push("/");
      return <Redirect to="/home" />;
    }
  }

  return (
    <div>
      <p>Darryl Brooks II</p>
      <p3>is</p3>
      <p1>
        <ReactRotatingText
          items={[
            'cout<<"Innovative";',
            'cout<<"Ambitious";',
            'cout<<"Extraordinary";',
          ]}
        />
      </p1>
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
