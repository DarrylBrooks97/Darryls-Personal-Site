const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(
  rateLimit({
    windowMs: 30 * 1000,
    max: 1,
  })
);
app.post("/api/form", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let info = transporter.sendMail(
    {
      from: `From ${req.body.mail} <${req.body.mail}>`, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: `New Message from ${req.body.name} !`, // Subject line
      text: `${req.body.message}`, // plain text body
    },
    (err, data) => {
      if (err) {
        console.log(`An Error has occurred: ${err}`);
      } else {
        console.log(data);
      }
    }
  );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
