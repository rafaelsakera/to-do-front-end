import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getEditTask, editTask as editTaskAPI } from "../../../API/EditTaskAPI";
import { GetTaskContext } from "../../../contexts/GetTasksContext";
import { CardData } from "../../../interfaces/CardData";

import DialogForm from "./DialogForm";
import { Grid } from "@material-ui/core";

interface Props {
  openDialog: boolean;
  setOpenDialog: Function;
  taskId: string;
}

const EditTaskDialog: React.FC<Props> = ({
  openDialog,
  setOpenDialog,
  taskId,
}) => {
  const [editTask, setEditTask] =
    React.useState<CardData | undefined>(undefined);
  const { setNewTasks } = useContext(GetTaskContext);

  React.useEffect(() => {
    getEditTask(taskId, setEditTask);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      aria-labelledby="new-task-dialog-title"
      fullWidth={true}
    >
      {editTask !== undefined ? (
        <div>
          <DialogTitle id="new-task-dialog-title">
            {"Edit Task - " + editTask.title}
          </DialogTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editTaskAPI(editTask, setOpenDialog, setNewTasks);
            }}
          >
            <DialogContent>
              <DialogForm editTask={editTask} setEditTask={setEditTask} />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)} color="primary">
                Cancle
              </Button>
              <Button type="submit" color="primary" autoFocus>
                Save
              </Button>
            </DialogActions>
          </form>
        </div>
      ) : (
        <Grid container justify={"center"}>
          <CircularProgress style={{ margin: "10px" }} />
        </Grid>
      )}
    </Dialog>
  );
};

export default EditTaskDialog;
