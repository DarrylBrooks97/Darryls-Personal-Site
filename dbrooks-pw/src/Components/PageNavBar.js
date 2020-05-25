import React, { useState } from "react";
import "./PageNavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function PageNavBar(props) {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [about, setAbout] = useState(false);
  const [techX, setTechX] = useState(false);
  const [contact, setContact] = useState(false);
  let history = useHistory();

  function routeChange() {
    if (redirect) {
      if (about && props.location !== "/home") {
        history.push(props.location);
        return <Redirect to="/home" />;
      }
      if (techX && props.location !== "/techx") {
        history.push(props.location);
        return <Redirect to="/techx" />;
      }
      if (contact && props.location !== "/contact") {
        history.push(props.location);
        return <Redirect to="/contact" />;
      }
    }
  }

  return (
    <div className="nav-bar">
      <div className="menu">
        <div>
          <h1 className="name">Darryl Brooks</h1>
        </div>
        <ul className="list">
          <li>
            <Button
              size="medium"
              className={classes.margin}
              onClick={() => {
                setRedirect(true);
                setAbout(true);
              }}
            >
              About
            </Button>
          </li>
          <li>
            <Button
              size="medium"
              className={classes.margin}
              onClick={() => {
                setRedirect(true);
                setTechX(true);
              }}
            >
              Tech Experience
            </Button>
          </li>
          <li>
            <Button
              size="medium"
              className={classes.margin}
              onClick={() => {
                setRedirect(true);
                setContact(true);
              }}
            >
              Contact
            </Button>
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-nav">
            <Nav>
              <Nav.Link
                onClick={() => {
                  setRedirect(true);
                  setAbout(true);
                }}
                style={{ color: "#e2c044" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setRedirect(true);
                  setTechX(true);
                }}
                style={{ color: "#e2c044" }}
              >
                Tech Experience
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setRedirect(true);
                  setContact(true);
                }}
                style={{ color: "#e2c044" }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {routeChange()}
      </div>
    </div>
  );
}

export default PageNavBar;
