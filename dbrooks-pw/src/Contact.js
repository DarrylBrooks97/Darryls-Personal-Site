import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "../src/Components/PageNavBar";
import "./Contact.css";
import { FormControl, Button, InputBase, InputLabel } from "@material-ui/core";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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
    // display: "flex",
    // justifyContent: "space-around",
  },
  margin: {
    // margin: theme.spacing(1),
  },
}));

function handleSubmit(e) {
  e.preventDefault();

  axios
    .post("http://localhost:8080/api/form", {
      name: document.getElementById("name").value,
      mail: document.getElementById("mail").value,
      message: document.getElementById("message").value,
    })
    .then(() => {
      alert("Submited!");
      resetForm();
    })
    .catch((e) => {
      alert(e);
    });
}
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("message").value = "";
}

function TechX() {
  const classes = useStyles();

  return (
    <div className="contact">
      <PageNavBar location="/contact" />
      <div className="contact-div">
        <div className="contact-headline">{"Contact"}</div>
        <div className="contact-title">{"Lets Chat"}</div>
        <form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
          <div className="contact-info">
            <FormControl className={classes.margin}>
              <InputLabel shrink style={{ color: "#e2c044" }}>
                yourName
              </InputLabel>
              <BootstrapInput
                type="text"
                id="name"
                required
                placeholder="cin>>yourName;"
                style={{ color: "white", width: "120%" }}
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel shrink style={{ color: "#e2c044" }}>
                yourEmail
              </InputLabel>
              <BootstrapInput
                type="email"
                id="mail"
                required
                placeholder="cin>>yourEmail;"
                style={{ color: "black", width: "120%" }}
              />
            </FormControl>
          </div>

          <div className="message-div">
            <FormControl>
              <InputLabel shrink style={{ color: "#e2c044" }}>
                yourMessage
              </InputLabel>
              <BootstrapInput
                type="text"
                required
                placeholder="cin>>yourMessage;"
                style={{
                  color: "white",
                  width: "300%",
                }}
                id="message"
                multiline
                rows={3}
              />
            </FormControl>
          </div>
          <div
            style={{
              width: "40%",
              margin: "1% 0px 3% 30%",
              textAlign: "center",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "#e2c044",
                textTransform: "capitalize",
                color: "#3f4043",
                fontFamily: "Montserrat",
              }}
              size="large"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TechX;
