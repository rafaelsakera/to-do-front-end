import React, { useState, useEffect } from "react";

import { GetTaskContext } from "../../contexts/GetTasksContext";

import TaskList from "../../components/taskList/TaskList";
import AddTaskBtn from "../../components/addTaskBtn/AddtaskBtn";
import AddTaskModal from "../../components/dialogs/addTaskDialog/AddTaskDialog";

import { CardData } from "../../interfaces/CardData";
import { getTasks } from "../../API/AllTaskAPI";

const AllTaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<CardData[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [getNewTask, setNewTasks] = React.useState<boolean>(false);

  useEffect(() => {
    getTasks(setTasks);
  }, []);

  useEffect(() => {
    if (getNewTask) {
      getTasks(setTasks);
      setNewTasks(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getNewTask]);

  return (
    <div>
      <GetTaskContext.Provider value={{ getNewTask, setNewTasks }}>
        <AddTaskModal openDialog={openDialog} setOpenDialog={setOpenDialog} />
        <TaskList tasks={tasks} title={"All Tasks"} />
      </GetTaskContext.Provider>
      <AddTaskBtn setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default AllTaskPage;
