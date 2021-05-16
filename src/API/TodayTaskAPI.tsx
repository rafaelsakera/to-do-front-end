import axios from "axios";

export const getTasks = (setTasks: Function) => {
  axios
    .get("/today-tasks")
    .then((res) => setTasks(res.data))
    .catch((err) => {
      setTasks([]);
      console.log(err);
    });
};

export const addTask = (setOpenDialog: Function, newTask: Object) => {
  axios
    .post("/add-new-task", newTask)
    .then(() => setOpenDialog(false))
    .catch((err) => {
      console.log(err);
    });
};
