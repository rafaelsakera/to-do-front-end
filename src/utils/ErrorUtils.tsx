export const errHeandle = (err: { response: any }, next?: Function) => {
  if (err.response.status === 403) {
    localStorage.removeItem("token");
    window.location.assign("/");
  } else {
    console.log(err);
  }

  if (next) next();
};
