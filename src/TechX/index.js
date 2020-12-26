import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "../Components/PageNavBar";
import ContactBar from "../Components/ContactBar";
import ExperienceCarousel from "../Components/ExperienceCarousel";
import ReactRotatingText from "react-rotating-text";
import "./TechX.css";
import { Button } from "react-bootstrap";

function TechX() {
  return (
    <div className="tech-home">
      <PageNavBar location="/techx" />
      <div className="tech-div">
        <div className="tech-headline">{"Tech Experience"}</div>
        <p className="rotating">
          <ReactRotatingText items={["Swipe --->"]} />
        </p>
        <ExperienceCarousel />
        <br></br>
        <br></br>
        <div className="tech-skills-div">
          <h1 className="tech-skills">Known Technologies</h1>
          <hr style={{ width: "50vw" }}></hr>
          <div className="row">
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/cplusplus.png")}
                alt="c++"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/python.png")}
                alt="python"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/github.png")}
                alt="github"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/html.png")}
                alt="html"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/css.png")}
                alt="css"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/firebase.png")}
                alt="firebase"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/c.png")}
                alt="c"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/csharp.png")}
                alt="csharp"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/linux.png")}
                alt="linux"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/node.png")}
                alt="node"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/photoshop.png")}
                alt="photoshop"
              />
            </div>
            <div className="skill-icon">
              <img
                className="tech-icon"
                src={require("../images/reactjs.png")}
                alt="reactjs"
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="tech-skills-div">
          <h1 className="tech-skills">Software Projects</h1>
          <hr style={{ width: "50vw" }}></hr>
          <div className="projects">
            <div className="project-div">
              <img
                src={require("../images/techbook.png")}
                className="picture-left"
                alt="techbook"
              ></img>
              <div className="floating-text-right">
                <h1 className="tech-skills">TechBook</h1>
                <div className="caption-textbox-right">
                  A social media platform created for the Google Tech Exchange
                  Students to collaborate, stay connected, and give guidance to
                  one another. Also built to promote the once in a life-time
                  program for qualified Computer Science/Engineering HBCU/HSI
                  Students.
                </div>
                <div className="used-tech-right">
                  <ul>
                    <li>React JS</li>
                    <li>Node.js</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="project-div">
              <div className="floating-text-left" style={{ order: "1" }}>
                <h1 className="tech-skills">
                  <a
                    href="https://github.com/DarrylBrooks97/HackFSU-2019"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Priority Task Scheduler
                  </a>
                </h1>
                <div className="caption-textbox-left">
                  A hackathon creation built for incoming college students to
                  learn how priotize their assignments with daily life events.
                  The app uses imported class assignments from Canvas to feed
                  the machine learning model to determine what tasks should be
                  completed first.
                </div>
                <div className="used-tech-left">
                  <ul>
                    <li>Flutter</li>
                    <li>Python</li>
                    <li>Canvas API</li>
                  </ul>
                </div>
              </div>
              <img
                src={require("../images/hackfsu.png")}
                className="picture-right"
                alt="hackfsu"
              ></img>
            </div>
            <br></br>
            <br></br>
            <div className="project-div">
              <img
                src={require("../images/iycw.png")}
                className="picture-left"
                alt="ac"
              ></img>
              <div className="floating-text-right">
                <h1 className="tech-skills">
                  <a
                    href="https://github.com/mikaylaorange/iycw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    If You Can't Walk
                  </a>
                </h1>
                <div className="caption-textbox-right">
                  This platform is a guide for those who would like to help the
                  #BlackLivesMatter community in the fight for social injustice.
                  As Black people in the United States we face many cases of
                  racial discrimination to a day to day basis, and we'd like to
                  take a stand.
                </div>
                <div className="used-tech-right">
                  <ul>
                    <li>React JS</li>
                    <li>Firebase</li>
                    <li>Material UI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="tech-skills-div">
          <h1 className="tech-skills">Check out my Résumé!</h1>
          <hr style={{ width: "50vw" }}></hr>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#e2c044",
              textTransform: "capitalize",
              color: "#3f4043",
              fontFamily: "Montserrat",
            }}
          >
            <a
              download
              href="https://drive.google.com/file/d/1I5NITRNZOYTlhfnDwbM5rUitjeQRITpE/view?usp=sharing"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Grab a Copy
              <span role="img" aria-label="inbox-emoji">
                📥
              </span>
            </a>
          </Button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ContactBar />
        </div>
      </div>
    </div>
  );
}

export default TechX;
