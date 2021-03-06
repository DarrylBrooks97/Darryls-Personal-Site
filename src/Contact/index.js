import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavBar from "../Components/PageNavBar";
import ContactBar from "../Components/ContactBar";
import "./Contact.css";
import { FormControl, Button, InputBase } from "@material-ui/core";
import { fade, withStyles } from "@material-ui/core/styles";
import axios from "axios";

const BootstrapInput = withStyles((theme) => ({
  root: {
    width: "9%",
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 2,
    position: "relative",
    color: "white",
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

function handleSubmit(e, setWait) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;
  const message = document.getElementById("message").value;
  const API_URL =
    "https://us-central1-db-personal-website.cloudfunctions.net/submit";
  if (message.length > 1000) {
    alert("Message size is too big !");
    return;
  }
  if (name.length > 24) {
    alert("Please enter only your first name");
    return;
  }
  if (mail.length > 40) {
    alert("Please enter a different email that is shorter");
    return;
  }
  document.getElementById("submission").style.display = "block";
  axios
    .post(API_URL, {
      name: name,
      mail: mail,
      message: message,
    })
    .then((e) => {
      if (e.data === "success") {
        document.getElementById("submission").style.display = "none";
        alert(
          "Thank you for contacting me. You should hear back within 1-3 days!"
        );
        setWait(true);
        document.getElementById("submission").style.display = "none";
        resetForm();
      } else {
        console.log(e.data);
        document.getElementById("submission").style.display = "none";
        alert(
          "Failed to send message. Try again or send me an email at darrylbrooks13@gmail.com !"
        );
      }
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

const customShrink = (id) => {
  document.getElementById(id).style.transition = "all 0.7s";
  document.getElementById(id).style.opacity = "1";
};

function TechX(props) {
  const [wait, setWait] = useState(false);

  if (wait) {
    Promise.resolve(() => {
      setTimeout(() => {
        setWait(false);
      }, 5000);
    });
  }
  return (
    <div className="contact">
      <PageNavBar location="/contact" />
      <div className="contact-div">
        <div className="contact-headline">{"Contact"}</div>
        <div className="contact-title">{"Lets Chat"}</div>
        <form onSubmit={(e) => handleSubmit(e, setWait)}>
          <div className="contact-info">
            <FormControl
              style={{
                width: "100%",
                margin: "0px 15% 0px 0px",
              }}
            >
              <p id="your-name">yourName</p>
              <BootstrapInput
                type="text"
                id="name"
                required
                placeholder="cin>>yourName;"
                onClick={() => customShrink("your-name")}
                style={{ color: "white", width: "100%" }}
              />
            </FormControl>
            <FormControl style={{ width: "100%" }}>
              <p id="your-email">yourEmail</p>
              <BootstrapInput
                type="email"
                id="mail"
                required
                placeholder="cin>>yourEmail;"
                onClick={() => customShrink("your-email")}
                style={{ color: "black", width: "100%" }}
              />
            </FormControl>
          </div>

          <div className="message-div">
            <FormControl style={{ width: "100%" }}>
              <p id="your-message">yourMessage</p>
              <BootstrapInput
                type="text"
                required
                placeholder="cin>>yourMessage;"
                style={{
                  color: "black",
                  width: "100%",
                }}
                onClick={() => customShrink("your-message")}
                id="message"
                multiline
                rows={15}
              />
            </FormControl>
          </div>
          <div
            style={{
              display: "block",
              width: "40%",
              margin: "1% 0px 3% 30%",
              textAlign: "center",
            }}
          >
            {!wait ? (
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
            ) : (
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#e2c044",
                  textTransform: "capitalize",
                  color: "#3f4043",
                  fontFamily: "Montserrat",
                }}
                size="large"
                disabled
              >
                Thank you for the submission!
              </Button>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "3% 0% 0% 0%",
              }}
            >
              <img
                src={require("../images/loading.gif")}
                className="loading-submission"
                id="submission"
                alt="loading..."
              />
            </div>
          </div>
        </form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ContactBar />
        </div>
      </div>
    </div>
  );
}

export default TechX;
