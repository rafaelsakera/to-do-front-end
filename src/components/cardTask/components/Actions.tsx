import React, { useState } from "react";

import { doneTask } from "../../../API/DoneTaskAPI";
import { deleteTask } from "../../../API/AllTaskAPI";
import SafetyDialog from "../../dialogs/safetyDialog/SafetyDialog";
import EditTaskDialog from "../../dialogs/editTaskDialog/EditTaskDialog";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const Actions: React.FC<{ id: string; setNewTasks: Function; done: boolean }> =
  ({ id, setNewTasks, done }) => {
    const classes = useStyles();
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const [openSafety, setOpenSafety] = useState<boolean>(false);

    

    const doneHandle = () => {
      doneTask(id, true, setNewTasks);
    };

    const redoHandle = () => {
      doneTask(id, false, setNewTasks);
    };

    const editHandle = () => {
      setOpenEdit(true);
    };

    return (
      <div className={classes.root}>
        <SafetyDialog
          open={openSafety}
          handleClose={() => setOpenSafety(false)}
          action={() => {
            deleteTask(id);
            setNewTasks(true);
          }}
          title={"Delete Action"}
        />
        <EditTaskDialog
          openDialog={openEdit}
          setOpenDialog={setOpenEdit}
          taskId={id}
        />
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" onClick={editHandle}>
              Edit
            </Button>
          </Grid>
          <Grid item>
            {done ? (
              <Button variant="contained" color="primary" onClick={redoHandle}>
                ReDo
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={doneHandle}>
                Done
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOpenSafety(true)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };

export default Actions;
