import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    return userToken;
  };

  const [token, setToken] = useState<Function>(getToken());

  const saveToken = (userToken: any) => {
    localStorage.setItem("token", JSON.stringify(userToken.data));
    setToken(userToken.data);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
