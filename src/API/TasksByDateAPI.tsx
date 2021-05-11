import React, { Dispatch } from "react";
import { CardData } from "../interfaces/CardData";
import axios from "axios";

export const getTasks = (
  startDate: string,
  endDate: string,
  setTasks: Dispatch<React.SetStateAction<[] | CardData[]>>
) => {
  axios
    .get("/tasks-by-date", {
      params: {
        startDate: startDate,
        endDate: endDate,
      },
    })
    .then((res) => setTasks(res.data))
    .catch((err) => {
      setTasks([]);
      console.log(err);
    });
};
