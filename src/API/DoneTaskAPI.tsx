import axios from "axios";

export const doneTask = (taskId: string, done: boolean, setNewTasks: Function) => {
  axios
    .post("/set-task-done?taskId=" + taskId, {
      done: done,
    })
    .then(()=> setNewTasks(true))
    .catch((err) => {
      console.log(err);
    });
};
