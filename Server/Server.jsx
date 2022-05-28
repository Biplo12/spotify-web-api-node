const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  console.log("Token refresh");
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECTED_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  });
  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      console.log("The access token has been refreshed!");
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
      spotifyApi.setAccessToken(data.body["access_token"]);
    })
    .catch((err, res) => {
      res.sendStatus(400).json("Error occurred with refresh token", err);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  console.log("User successfully logged in");
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECTED_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err, res) => {
      res.sendStatus(400).json("Error occurred with access token", err);
    });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
