import React, { Dispatch } from "react";
import { CardData } from "../interfaces/CardData";
import axios from "axios";

export const getTasks = (
  setTasks: Dispatch<React.SetStateAction<[] | CardData[]>>
) => {
  axios
    .get("/all-tasks")
    .then((res) => setTasks(res.data))
    .catch((err) => {
      setTasks([]);
      console.log(err);
    });
};

export const deleteTask = (id: number) => {
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
