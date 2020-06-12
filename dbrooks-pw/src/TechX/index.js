import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "../Components/PageNavBar";
import ContactBar from "../Components/ContactBar";
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
        <div aria-label="gallery" tabIndex="0" className="scroll-bar">
          <ul>
            <li>
              <img
                src={require("../images/google.JPG")}
                alt="GoogleImage"
              ></img>
              <h1>
                <a
                  href="https://www.eng.famu.fsu.edu/news/darryl-brooks-accepted-in-google-tech-exchange-program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Tech Exchange
                </a>
              </h1>
              <p style={{ color: "#e2c044" }}>Google Scholar</p>
              <p>Jan 2020 - May 2020</p>
              <ul>
                <li>
                  <p>
                    {" "}
                    • Selected out of many to represent Florida A&M University
                    at Google's headquarters for an academic semester.
                  </p>
                </li>
                <li>
                  <p>
                    • Was taught advanced Data structues, Machine learning, and
                    other software development concepts by Google Software
                    Engineers.
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    • Developed a social media platform using ReactJS to expose
                    the Tech Exchange program and to help those who are in it
                    stay connected.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <img
                src={require("../images/syntech.jpeg")}
                alt="SyntechImage"
              ></img>
              <h1>
                <a
                  href="https://www.myfuelmaster.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Syntech Systems Inc.
                </a>
              </h1>
              <p style={{ color: "#e2c044" }}>Software Engineer Intern</p>
              <p>Aug 2019 - Jan 2020</p>
              <ul>
                <li>
                  <p>
                    {" "}
                    • Automated a customer data import using Python to prevent
                    customer's placing incorrect information into the system.
                  </p>
                </li>
                <li>
                  <p>
                    • Pioneered a companywide local website that organized the
                    engineering department's Atlassian JIRA tickets(issues).
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    • 2x Software Engineer Intern and integrated a new team into
                    the engineering department.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <img
                src={require("../images/cleanPic.JPG")}
                alt="UberImage"
              ></img>
              <h1>
                <a
                  href="https://uncf.org/programs/hbcu-innovation-summit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UNCF HBCU Innovation Summit
                </a>
              </h1>
              <p style={{ color: "#e2c044" }}>UNCF Scholar</p>
              <p>Nov 2019 - Nov 2019</p>
              <ul>
                <li>
                  <p>
                    {" "}
                    • Selected to out of 1000+ students within the country to
                    represent Florida A&M University and UNCF.
                  </p>
                </li>
                <li>
                  <p>
                    • Exposed to 7+ Top Tech companies within the San Franciso
                    Bay Area including Google, Adobe, VISA, etc.
                  </p>
                </li>
                <li>
                  {" "}
                  <p>• Landed Summer 2020 internship @ Quicken Loans.</p>
                </li>
              </ul>
            </li>
            <li>
              <img src={require("../images/GE.jpg")} alt="GEImage"></img>
              <h1>
                <a
                  href="https://www.geappliances.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  General Electric Appliances
                </a>
              </h1>
              <p style={{ color: "#e2c044" }}>Electrical Engineer Intern</p>
              <p>May 2019 - Aug 2019</p>
              <ul>
                <li>
                  <p>
                    {" "}
                    • Fabricated and debugged 50+ production level circuit
                    boards.
                  </p>
                </li>
                <li>
                  <p>
                    • Investigated failed production units to formulate
                    engineered report.
                  </p>
                </li>
                <li>
                  {" "}
                  <p>• Improved testing of failed production units.</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
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
                    <li>React</li>
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
                <h1 className="tech-skills">Priority Task Scheduler</h1>
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
                src={require("../images/ac.png")}
                className="picture-left"
                alt="ac"
              ></img>
              <div className="floating-text-right">
                <h1 className="tech-skills">AirWise</h1>
                <div className="caption-textbox-right">
                  A Senior Design class project built using machine learning to
                  predict user's preferred temperature within individual rooms.
                  This device is portable and allows multiple users to have
                  their own individualized room temperature.
                </div>
                <div className="used-tech-right">
                  <ul>
                    <li>Python</li>
                    <li>Raspberry Pi</li>
                    <li>Tensor Flow</li>
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
              href={require("./Brooks_Darryl_Resume.pdf")}
              style={{ textDecoration: "none" }}
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
