import axios from "axios";

export const loginUser = (credentials: object, setToken: Function) => {
  axios
    .post("/login", {
      credentials,
    })
    .then((r) => setToken(r));
};
