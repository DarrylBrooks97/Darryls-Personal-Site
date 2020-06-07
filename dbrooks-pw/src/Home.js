import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "./Components/PageNavBar";
import ContactBar from "../src/Components/ContactBar";
import "./home.css";

function Home() {
  return (
    <div style={{ width: "auto" }}>
      <div className="home">
        <PageNavBar location="/home" />
        <div className="home-div">
          <div className="home-headline">{"About"}</div>
          <ul className="h-contents">
            <li className="home-item">
              <div className="home-content">
                <div className="home-content-div">
                  <img
                    className="pictures"
                    src={require("./images/IMG_1829.JPG")}
                    alt="pic"
                  />
                </div>
                <div className="txt-container">
                  <h1 className="about-txt">
                    About Me
                    <hr></hr>
                    Darryl Brooks, an upcoming Software Engineer, was born in
                    Tampa, FL however, was raised in Jacksonville, FL. As a
                    child he always had a fasination in sciene & technology,
                    where he was always curious on how computers worked. His
                    parents put him to the test and enrolled him at Robert E.
                    Lee High School for their rigorous Engineering program. From
                    there he knew he wanted to use his technical abilities to
                    make a change in the technology industry. Soon applying to
                    one of the best universities in the state of Florida for
                    Computer Engineering,
                    <a
                      href="https://www.famu.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Florida A&M University
                    </a>
                    . He is now entering his senior year and is actively
                    applying to full-time Software engineering positions.
                    <br></br>
                  </h1>
                </div>
              </div>
            </li>
            <li className="home-item">
              <div className="interest">
                <div className="interest-div">
                  <h1 className="about-txt">
                    Personal Interests
                    <hr></hr>
                    <ul className="lists">
                      <li>Full-Stack Development</li>
                      <li>Mobile App Development</li>
                      <li>Basketball</li>
                      <li>Hiking</li>
                      <li>Music</li>
                    </ul>
                  </h1>
                </div>
                <div className="about-content-div">
                  <img
                    className="pictures"
                    src={require("./images/MS.jpg")}
                    alt="pic"
                  />
                </div>
              </div>
            </li>
            <li className="home-item">
              <div className="home-content">
                <div className="fun-fact-div">
                  <img
                    className="pictures"
                    src={require("./images/IMG_4990.jpg")}
                    alt="pic"
                  />
                </div>
                <div className="about-txt-div">
                  <h1 className="about-txt">
                    Fun Facts
                    <hr></hr>
                    <ul className="lists">
                      <li>First Generation College Student</li>
                      <li>Solves a Rubix Cube within 1 minute</li>
                      <li>Actively learning Spanish</li>
                    </ul>
                  </h1>
                </div>
              </div>
            </li>
          </ul>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ContactBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
