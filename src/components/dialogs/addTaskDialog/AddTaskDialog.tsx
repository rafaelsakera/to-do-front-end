import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import { addTask } from "../../../API/TodayTaskAPI";

import DialogForm from "./DialogForm";

interface Props {
  openDialog: boolean;
  setOpenDialog: Function;
  setNewTasks: Function;
}

const AddTaskDialog: React.FC<Props> = ({
  openDialog,
  setOpenDialog,
  setNewTasks,
}) => {
  const [newTask, setNewTask] = React.useState({});

  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      aria-labelledby="new-task-dialog-title"
      fullWidth={true}
    >
      <DialogTitle id="new-task-dialog-title">{"Add New Task"}</DialogTitle>
      <form
        onSubmit={() => {
          addTask(setOpenDialog, newTask);
          setNewTasks(true);
        }}
      >
        <DialogContent>
          <DialogForm newTask={newTask} setNewTask={setNewTask} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancle
          </Button>
          <Button type="submit" color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddTaskDialog;
