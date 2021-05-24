import React from "react";

import { useStyles } from "./Style";
import Grid from "@material-ui/core/Grid";
import FirstSection from "./components/sections/FirstSections";

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center">
        <h1 className={classes.pageTitle}>Tasks Scheduler</h1>
        <FirstSection />
      </Grid>
    </div>
  );
};

export default HomePage;
