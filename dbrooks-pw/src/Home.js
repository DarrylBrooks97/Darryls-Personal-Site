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
        <ul className="h-contents">
          <li className="home-item">
            <div className="home-content">
              <div
                style={{
                  width: "60%",
                }}
              >
                <img
                  className="pictures"
                  src={require("./images/IMG_1829.JPG")}
                  alt="pic"
                />
              </div>
              <div className="txt-container">
                <h1 className="about-txt">
                  Darryl Brooks, an upcoming Software Engineer, was born in
                  Tampa, FL however, was raised in Jacksonville, FL. As a child
                  he always had a fasination in sciene & technology, where he
                  was always curious on how computers worked. His parents put
                  him to the test and enrolled him at Robert E. Lee High School
                  for their rigorous Engineering program.
                </h1>
              </div>
            </div>
          </li>
          <li className="home-item">
            <div className="home-content">
              <div style={{ width: "40%" }}>
                <h1 className="about-txt">Lists of Interests</h1>
              </div>
              <div style={{ width: "60%" }}>
                <img
                  className="pictures"
                  src={require("./images/cleanPic.JPG")}
                  alt="pic"
                />
              </div>
            </div>
          </li>
          <li className="home-item">
            <div className="home-content">
              <div style={{ width: "60%" }}>
                <img
                  className="pictures"
                  src={require("./images/IMG_4990.jpg")}
                  alt="pic"
                />
              </div>
              <div style={{ width: "45%", height: "50%" }}>
                <h1 className="about-txt">Fun Facts</h1>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
