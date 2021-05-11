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
