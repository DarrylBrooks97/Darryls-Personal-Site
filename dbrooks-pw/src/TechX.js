import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "../src/Components/PageNavBar";
import "./TechX.css";

function TechX() {
  return (
    <div className="home">
      <PageNavBar location="/techx" />
      <div className="page-content-div">
        <div className="headline">{"cout<<Experience<<endl"}</div>
        <img
          className="picture"
          src={require("../src/images/cleanPic.JPG")}
          alt="pic"
        />
      </div>
    </div>
  );
}

export default TechX;
