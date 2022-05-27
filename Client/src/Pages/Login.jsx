import React from "react";
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=f8147acb925f407990aad1a7ab97c34b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login = () => {
  return (
    <div className="login-containe">
      <button>Login</button>
    </div>
  );
};

export default Login;
