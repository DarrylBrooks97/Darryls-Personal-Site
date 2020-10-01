import React from "react";
import "./ContactBar.css";

function ContactBar() {
  return (
    <div className="contact-bar">
      <ul className="social-medias">
        <li>
          <a
            href="https://www.linkedin.com/in/darryl-brooks-ii-a17a46140/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/li.png")}
              alt="linkdin.png"
              id="linkedin"
            ></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/DarrylBrooks97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/git.png")}
              alt="git.png"
              id="github"
            ></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/d.brooks97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/ig.png")}
              alt="instagram.png"
              id="instagram"
            ></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/DarrylB97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/twitter.png")}
              alt="twitter.png"
              id="twitter"
            ></img>
          </a>
        </li>
      </ul>
      <div className="copyright">
        © 2020 Darryl Brooks. All rights reserved.
      </div>
    </div>
  );
}

export default ContactBar;
