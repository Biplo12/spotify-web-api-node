import React from "react";

const dotenv = require("dotenv");

dotenv.config();

const client_id = process.env.REACT_APP_CLIENT_ID;
const redirected_uri = process.env.REACT_APP_REDIRECTED_URI;

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirected_uri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {
  return (
    <div>
      <a href={AUTH_URL}>Login With Spotify</a>
    </div>
  );
}
