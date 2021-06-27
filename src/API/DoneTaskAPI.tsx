import axios from "axios";
import { errHeandle } from "../utils/ErrorUtils";

export const doneTask = (
  taskId: string,
  done: boolean,
  setNewTasks: Function
) => {
  axios
    .post("/set-task-done?taskId=" + taskId, {
      done: done,
    })
    .then(() => setNewTasks(true))
    .catch((err) => errHeandle(err));
};
