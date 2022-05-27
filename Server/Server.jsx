const express = require("express");
const spotifyWebAPI = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app
  .post("/login", (req, res) => {
    const code = req.body.code;
    const spotifyAPI = new spotifyWebAPI({
      redirectUri: process.env.REDIRECTED_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });
    spotifyAPI.authorizationCodeGrant(code).then((data) => {
      res.json({
        access_token: data.body.access_token,
        refresh_token: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    });
  })
  .patch((err) => {
    res.status(300).json(err);
  });

app.listen(process.env.PORT || 3001, () => {
  console.log("Server started on port 3000");
});
