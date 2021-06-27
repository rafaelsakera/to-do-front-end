import axios from "axios";
import { errHeandle } from "../utils/ErrorUtils";

export const loginUser = (credentials: object, setToken: Function) => {
  axios
    .post("/login", {
      ...credentials,
    })
    .then((res) => setToken(res))
    .catch((err) => errHeandle(err));
};

export const getUserName = (setUserName: Function) => {
  axios
    .get("/user-name")
    .then((res) => {
      setUserName(res.data);
    })
    .catch((err) => errHeandle(err));
};
