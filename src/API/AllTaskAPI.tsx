import axios from "axios";

export const getTasks = (setTasks: Function) => {
  axios
    .get("/all-tasks")
    .then((res) => setTasks(res.data))
    .catch((err) => {
      setTasks([]);
      console.log(err);
    });
};

export const deleteTask = (id: string) => {
  axios
    .delete("/delete-task", {
      data: {
        taskId: id,
      },
    })
    .catch((err) => {
      console.log(err);
    });
};
