import React, { useEffect, useState } from "react";

import { CardData } from "../../interfaces/CardData";
import { getTasks } from "../../API/TodayTaskAPI";

import TaskList from "../../components/taskList/TaskList";
import AddtaskBtn from "../../components/addTaskBtn/AddtaskBtn";
import AddTaskModal from "../../components/dialogs/addTaskDialog/AddTaskDialog";

const TodayTaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<CardData[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    getTasks(setTasks);
  }, []);

  return (
    <div className="today-task-page">
      <AddTaskModal openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <TaskList tasks={tasks} title={"Today Tasks"} />
      <AddtaskBtn setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default TodayTaskPage;
