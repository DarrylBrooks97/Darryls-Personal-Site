import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "../src/Components/PageNavBar";
import "./Contact.css";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import { green } from "@material-ui/core/colors";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 2,
    position: "relative",
    backgroundColor: "white",
    color: "black",
    border: "3px solid #ffff",
    fontSize: 18,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: "#e2c044",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    // margin: theme.spacing(1),
  },
}));

function TechX() {
  const classes = useStyles();

  return (
    <div className="contact">
      <PageNavBar location="/contact" />
      <div className="contact-div">
        <div className="contact-headline">{"Contact"}</div>
        <div className="contact-title">{"Lets Chat"}</div>
        <div className="contact-info">
          {/* <form className={classes.root} noValidate> */}
          <FormControl className={classes.margin}>
            <InputLabel shrink style={{ color: "#e2c044" }}>
              yourName
            </InputLabel>
            <BootstrapInput
              placeholder="cin>>yourName"
              style={{ color: "white", width: "100vh" }}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel shrink style={{ color: "#e2c044" }}>
              yourEmail
            </InputLabel>
            <BootstrapInput
              placeholder="cin>>yourEmail"
              style={{ color: "black" }}
            />
          </FormControl>
          {/* </form> */}
        </div>
        <div className="message-div">
          <FormControl>
            <InputLabel shrink style={{ color: "#e2c044" }}>
              yourMessage
            </InputLabel>
            <BootstrapInput
              placeholder="cin>>yourMessage"
              style={{ color: "white" }}
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default TechX;
