import React, { useState, useEffect } from "react";

import TaskList from "../../components/taskList/TaskList";
import AddtaskBtn from "../../components/addTaskBtn/AddtaskBtn";
import AddTaskModal from "../../components/dialogs/addTaskDialog/AddTaskDialog";

import { CardData } from "../../interfaces/CardData";
import { getTasks } from "../../API/AllTaskAPI";

const AllTaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<CardData[]>([]);
  const [getNewTask, setNewTasks] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    getTasks(setTasks);
  }, []);

  useEffect(() => {
    if (getNewTask) getTasks(setTasks);
  }, [getNewTask]);

  return (
    <div>
      <AddTaskModal
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        setNewTasks={setNewTasks}
      />
      <AddtaskBtn setOpenDialog={setOpenDialog} />
      <TaskList tasks={tasks} title={"All Tasks"} setNewTasks={setNewTasks} />
    </div>
  );
};

export default AllTaskPage;
