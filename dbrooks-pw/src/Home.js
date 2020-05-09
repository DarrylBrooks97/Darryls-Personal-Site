import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./home.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Home() {
  const classes = useStyles();

  function navSlide() {
    const burger = document.querySelector("burger");
    const nav = document.querySelector("list");
    console.log(burger);
    if (burger) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
      });
    }
  }
  return (
    <div className="nav-bar">
      <h className="name">Darryl Brooks</h>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="list">
        <li>
          <Button size="medium" className={classes.margin}>
            About
          </Button>
        </li>
        <li>
          <Button size="medium" className={classes.margin}>
            Tech Experience
          </Button>
        </li>
        <li>
          <Button size="medium" className={classes.margin}>
            Contact
          </Button>
        </li>
      </ul>
      {navSlide()}
    </div>
  );
}

export default Home;
