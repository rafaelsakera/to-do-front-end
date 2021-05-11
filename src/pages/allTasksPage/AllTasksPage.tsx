import React, { useState, useEffect } from "react";

import TaskList from "../../components/taskList/TaskList";
import AddtaskBtn from "../../components/addTaskBtn/AddtaskBtn";
import AddTaskModal from "../../components/dialogs/addTaskDialog/AddTaskDialog";

import { CardData } from "../../interfaces/CardData";
import { getTasks } from "../../API/AllTaskAPI";

const AllTaskPage: React.FC = () => {
  
  const [tasks, setTasks] = useState<CardData[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    getTasks(setTasks);
  }, []);

  

  return (
    <div>
      <AddtaskBtn setOpenDialog={setOpenDialog} />
      <TaskList tasks={tasks} title={"All Tasks"} />
      <AddTaskModal openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default AllTaskPage;
