import React from "react";
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=d69815a90097466f8ce5c0ea526b7874&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login = () => {
  return (
    <div className="login-containe">
      <a href={AUTH_URL}>Login</a>
    </div>
  );
};

export default Login;
