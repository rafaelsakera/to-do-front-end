import { createContext } from "react";

export const GetTaskContext = createContext<{
  getNewTask: boolean;
  setNewTasks: Function;
}>({
  getNewTask: false,
  setNewTasks: () => {},
});
