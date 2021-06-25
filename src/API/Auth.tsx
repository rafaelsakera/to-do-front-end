import axios from "axios";

export const loginUser = (credentials: object, setToken: Function) => {
  axios
    .post("/login", {
      ...credentials,
    })
    .then((res) => setToken(res));
};

export const getUserName = (setUserName: Function) => {
  axios.get("/user-name").then((res) => {
    setUserName(res.data);
  });
};
