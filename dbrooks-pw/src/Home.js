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
        <div className="h-contents">
          <div className="home-content">
            <img
              className="home-picture"
              src={require("./images/IMG_1829.JPG")}
              alt="pic"
            />
            <div className="txt-container">
              <h1 className="about-txt">
                Darryl Brooks, an upcoming Software Engineer, was born in Tampa,
                FL however, was raised in Jacksonville, FL. As a child he always
                had a fasination in sciene & technology, where he was always
                curious on how computers worked. His parents put him to the test
                and enrolled him at Robert E. Lee High School for their rigorous
                Engineering program.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
