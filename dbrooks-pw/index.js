const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let info = transporter.sendMail(
      {
        from: `${req.body.mail}`, // sender address
        to: process.env.EMAIL, // list of receivers
        subject: `New Message from ${req.body.name} !`, // Subject line
        text: `${req.body.message}`, // plain text body
      },
      (err, data) => {
        if (err) {
          console.log(`An Error has occurred: ${err}`);
        }
      }
    );
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
