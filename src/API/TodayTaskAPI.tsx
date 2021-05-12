import React, { Dispatch } from "react";
import { CardData } from "../interfaces/CardData";
import axios from "axios";

export const getTasks = (
  setTasks: Dispatch<React.SetStateAction<[] | CardData[]>>
) => {
  axios
    .get("/today-tasks")
    .then((res) => setTasks(res.data))
    .catch((err) => {
      setTasks([]);
      console.log(err);
    });
};

export const addTask = (setOpenDialog: Function, newTask: Object) => {
  console.log(newTask);
  axios
    .post("/add-new-task", newTask)
    .then((res) => {
      setOpenDialog(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
