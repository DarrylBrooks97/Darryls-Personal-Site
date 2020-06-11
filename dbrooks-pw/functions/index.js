const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const clientId = functions.config().credentials.clientid;
const clientSecret = functions.config().credentials.clientsecret;
const email = functions.config().credentials.email;
const refreshToken = functions.config().credentials.refreshtoken;
const accessToken = functions.config().credentials.accesstoken;
const accessUrl = functions.config().accessurl;

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return;
    }
    let transporter = nodemailer.createTransport({
      pool: true,
      service: "Gmail",
      auth: {
        type: "OAuth2",
        user: email,
        accessToken: accessToken,
        clientId: clientId,
        clientSecret: clientSecret,
        accessUrl: accessUrl,
        refreshToken: refreshToken,
        expires: 1591909342705 + 60000,
      },
    });
    let info = transporter.sendMail(
      {
        from: `From ${req.body.mail} <${req.body.mail}>`, // sender address
        to: email, // list of receivers
        subject: `New Message from ${req.body.name} !`, // Subject line
        text: `${req.body.message}`, // plain text body
      },
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send("success");
        }
      }
    );
  });
});
