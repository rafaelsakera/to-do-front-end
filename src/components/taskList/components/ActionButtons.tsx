import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const ActionButtons: React.FC<{ setCollaps: Function }> = ({ setCollaps }) => {
  return (
    <Grid container justify={"center"} spacing={3}>
      <Grid item>
        <Button
          variant="contained"
          style={{ color: "green" }}
          onClick={() => setCollaps(2)}
        >
          Done Tasks
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCollaps(1)}
        >
          To Do Tasks
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCollaps(3)}
        >
          Missed Tasks
        </Button>
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
