import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "../src/Components/PageNavBar";
import "./TechX.css";

function TechX() {
  return (
    <div className="tech-home">
      <PageNavBar location="/techx" />
      <div className="tech-div">
        <div className="tech-headline">{"Tech Experience"}</div>
        <div aria-label="gallery" tabindex="0" className="scroll-bar">
          <ul>
            <li>
              <img src={require("./images/google.JPG")}></img>
              <h1>This is my story</h1>
            </li>
            <li>
              <img src={require("./images/syntech.jpeg")}></img>
              <h1>Should I continue?</h1>
            </li>
            <li>
              <img src={require("./images/uber.jpg")}></img>
              <h1>Man this shit better be raw</h1>
            </li>
            <li>
              <img src={require("./images/GE.jpg")}></img>
              <h1>Man this shit better be raw</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechX;
