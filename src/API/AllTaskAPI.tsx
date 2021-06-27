import axios from "axios";
import { errHeandle } from "../utils/ErrorUtils";

export const getTasks = (setTasks: Function) => {
  axios
    .get("/all-tasks")
    .then((res) => setTasks(res.data))
    .catch((err) => errHeandle(err));
};

export const deleteTask = (id: string) => {
  axios
    .delete("/delete-task", {
      data: {
        taskId: id,
      },
    })
    .catch((err) => errHeandle(err));
};
