import axios from "axios";
import { errHeandle } from "../utils/ErrorUtils";

export const getEditTask = (taskId: string, setEditTask: Function) => {
  axios
    .get("/task-by-id?taskId=" + taskId)
    .then((res) => setEditTask(res.data[0]))
    .catch((err) => errHeandle(err));
};

export const editTask = (
  task: object,
  setClose: Function,
  setNewTasks: Function
) => {
  axios
    .post("/edit-task", task)
    .then(() => setNewTasks(true))
    .then(() => setClose(false))
    .catch((err) => errHeandle(err));
};
