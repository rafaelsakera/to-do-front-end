import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

import { useStyles } from "./Style";

const AddTaskBtn: React.FC<{ setOpenDialog: Function }> = ({ setOpenDialog }) => {
  const classes = useStyles();

  return (
    <Tooltip title="Add New Task" aria-label="add">
      <Fab
        color="primary"
        className={classes.fab}
        onClick={() => setOpenDialog(true)}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default AddTaskBtn;
