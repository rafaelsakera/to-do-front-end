import React, { useState } from "react";

import { deleteTask } from "../../../API/AllTaskAPI";
import SafetyDialog from "../../dialogs/safetyDialog/SafetyDialog";

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

const Actions: React.FC<{ id: number }> = ({ id }) => {
  const classes = useStyles();
  const [openSafety, setOpenSafety] = useState<boolean>(false);

  const doneHandle = () => {
    console.log("send backend to that task - " + id + " is done");
  };

  const editHandle = () => {
    console.log("open modal to edit task - " + id);
  };

  return (
    <div className={classes.root}>
      <SafetyDialog
        open={openSafety}
        handleClose={() => setOpenSafety(false)}
        action={() => deleteTask(id)}
        title={"Delete Action"}
      />
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button variant="contained" onClick={() => editHandle()}>
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => doneHandle()}
          >
            Done
          </Button>
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
