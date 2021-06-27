import axios from "axios";
import { errHeandle } from "../utils/ErrorUtils";

export const getTasks = (setTasks: Function) => {
  axios
    .get("/today-tasks")
    .then((res) => setTasks(res.data))
    .catch((err) => {
      setTasks([]);
      errHeandle(err);
    });
};

export const addTask = (setOpenDialog: Function, newTask: Object) => {
  axios
    .post("/add-new-task", { ...newTask, done: false })
    .then(() => setOpenDialog(false))
    .catch((err) => errHeandle(err));
};
