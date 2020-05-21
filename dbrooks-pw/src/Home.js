import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "./Components/PageNavBar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <PageNavBar location="/home" />
      <div className="home-div">
        <div className="home-headline">{"cout<<About<<endl"}</div>
        <div className="home-content">
          <img
            className="home-picture"
            src={require("./images/pic1.JPG")}
            alt="pic"
          />
          <div className="txt-container">
            <h1 className="about-txt">
              Darryl Brooks is a senior Computer Engineering student from
              Jacksonville, FL. He aspires to beome a Software Engineer
              specifically in Full Stack development.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
