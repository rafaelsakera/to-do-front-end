import React, { useEffect, useState } from "react";

import { GetTaskContext } from "../../contexts/GetTasksContext";

import { CardData } from "../../interfaces/CardData";
import { getTasks } from "../../API/TodayTaskAPI";

import TaskList from "../../components/taskList/TaskList";
import AddtaskBtn from "../../components/addTaskBtn/AddtaskBtn";
import AddTaskModal from "../../components/dialogs/addTaskDialog/AddTaskDialog";

const TodayTaskPage: React.FC = () => {
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
    <div className="today-task-page">
      <GetTaskContext.Provider value={{ getNewTask, setNewTasks }}>
        <AddTaskModal openDialog={openDialog} setOpenDialog={setOpenDialog} />
        <TaskList tasks={tasks} title={"Today Tasks"} />
      </GetTaskContext.Provider>
      <AddtaskBtn setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default TodayTaskPage;
