import React from "react";
import axios from "axios";
const useAuth = (code) => {
  const [accessToken, setAccessToken] = React.useState(null);
  const [refreshToken, setRefreshToken] = React.useState(null);
  const [expiresIn, setExpiresIn] = React.useState(null);

  React.useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        res.status(200).json(res.data);
      })
      .catch((res, err) => {
        res.status(500).json("Authentication expired", err);
        window.location = "/";
      });
  }, [code]);
};

export default useAuth;
