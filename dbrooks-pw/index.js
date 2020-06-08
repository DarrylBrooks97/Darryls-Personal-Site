const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
import Homepage from "./src/Home";

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 3,
  })
);
app.post("/api/form", (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
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
        res.send("fail");
        console.log(`An Error has occurred: ${err}`);
      } else {
        res.send("success");
      }
    }
  );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
