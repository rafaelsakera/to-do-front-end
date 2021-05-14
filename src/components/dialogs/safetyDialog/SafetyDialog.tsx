import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

interface SimpleDialogProps {
  open: boolean;
  handleClose: () => void;
  action: () => void;
  title: string;
}

const SafetyDialog = (props: SimpleDialogProps) => {
  const { open, handleClose, action, title } = props;

  const deleteHandle = () => {
    action();
    handleClose();
  };

  return (
    <Dialog onClose={() => handleClose()} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure want to delete this task?
          <br />
          If So, Click the Delete Button.
        </DialogContentText>
      </DialogContent>
      <Grid container justify={"center"} spacing={2}>
        <Grid item>
          <Button onClick={deleteHandle}>Delete</Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              handleClose();
            }}
          >
            Cancle
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default SafetyDialog;
