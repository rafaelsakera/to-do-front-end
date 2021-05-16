import axios from "axios";

export const getTasks = (
  startDate: string,
  endDate: string,
  setTasks: Function
) => {
  axios
    .get("/tasks-by-date", {
      params: {
        startDate: startDate,
        endDate: endDate,
      },
    })
    .then((res) => setTasks(res.data))
    .catch((err) => {
      setTasks([]);
      console.log(err);
    });
};
