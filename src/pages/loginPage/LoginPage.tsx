import React, { useState } from "react";

import { loginUser } from "../../API/Auth";

import "./LoginPage.css";

const LoginPage: React.FC<{ setToken: Function }> = ({ setToken }) => {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    loginUser({ userName: username, password: password }, setToken);
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Please Log In</h1>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
