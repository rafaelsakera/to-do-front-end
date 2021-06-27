import axios from "axios";
import { errHeandle } from "../utils/ErrorUtils";

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
      errHeandle(err);
    });
};
