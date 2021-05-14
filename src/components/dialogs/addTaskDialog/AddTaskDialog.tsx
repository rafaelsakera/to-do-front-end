import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import { addTask } from "../../../API/TodayTaskAPI";

import DialogForm from "./DialogForm";

const AddTaskDialog: React.FC<{
  openDialog: boolean;
  setOpenDialog: Function;
  setNewTasks: Function;
}> = ({ openDialog, setOpenDialog, setNewTasks }) => {
  const [newTask, setNewTask] = React.useState({});

  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      aria-labelledby="new-task-dialog-title"
      fullWidth={true}
    >
      <DialogTitle id="new-task-dialog-title">{"Add New Task"}</DialogTitle>
      <DialogContent>
        <DialogForm newTask={newTask} setNewTask={setNewTask} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)} color="primary">
          Cancle
        </Button>
        <Button
          onClick={() => {
            addTask(setOpenDialog, newTask);
            setNewTasks(true);
          }}
          color="primary"
          autoFocus
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskDialog;
