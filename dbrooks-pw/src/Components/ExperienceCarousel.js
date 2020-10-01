import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ExperienceCarousel() {
  return (
    <div>
      <div aria-label="gallery" tabIndex="0" className="scroll-bar">
        <ul>
          <li>
            <img src={require("../images/google.JPG")} alt="GoogleImage"></img>
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
                  • Selected out of many to represent Florida A&M University at
                  Google's headquarters for an academic semester.
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
                  the Tech Exchange program and to help those who are in it stay
                  connected.
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
            <img src={require("../images/cleanPic.JPG")} alt="UberImage"></img>
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
                  • Exposed to 7+ Top Tech companies within the San Franciso Bay
                  Area including Google, Adobe, VISA, etc.
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
                  • Fabricated and debugged 50+ production level circuit boards.
                </p>
              </li>
              <li>
                <p>
                  • Investigated failed production units to formulate engineered
                  report.
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
    </div>
  );
}

export default ExperienceCarousel;
