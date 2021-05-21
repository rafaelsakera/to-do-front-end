import React from "react";

import { useStyles } from "./Style";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center">
        <Typography variant="h3" gutterBottom className={classes.title}>
          Tasks Scheduler
        </Typography>
      </Grid>
      <Grid container className={classes.firstSection}>
        <Grid container className={classes.firstSectionTitle}>
          Manage your time with:
        </Grid>
        <Grid container justify={"center"} spacing={3}>
          <Grid item>1</Grid>
          <Grid item>2</Grid>
          <Grid item>3</Grid>
          <Grid item>4</Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
