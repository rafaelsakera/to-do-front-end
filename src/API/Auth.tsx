import axios from "axios";

export const loginUser = (credentials: object, setToken: Function) => {
  axios
    .post("/login", {
      ...credentials,
    })
    .then((res) => setToken(res));
};

// export const newToken = (func: Function, args: any[]) => {
//   axios
//     .post("/token", { token: localStorage.getItem("refreshToken") })
//     .then((res) => {
//       localStorage.setItem("token", JSON.stringify(res.data.token));
//     })
//     .then(() => func(...args));
// };
