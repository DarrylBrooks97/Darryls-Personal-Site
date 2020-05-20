import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "../src/Components/PageNavBar";
import "./Contact.css";

function TechX() {
  return (
    <div className="home">
      <PageNavBar location="/contact" />
      <div className="page-content-div">
        <div className="headline">{"cout<<Contact<<endl"}</div>
        <img
          className="picture"
          src={require("./images/techX.jpg")}
          alt="pic"
        />
      </div>
    </div>
  );
}

export default TechX;
