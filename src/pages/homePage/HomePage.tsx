import React from "react";

import { useStyles } from "./Style";
import PageCard from "./components/Card";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";

const HomePage: React.FC = () => {
  const classes = useStyles();
  const [mainCards, setMaincard] = React.useState(false);

  React.useEffect(() => {
    setMaincard(true);
  }, []);

  return (
    <div>
      <Grid container justify="center">
        <Typography variant="h3" gutterBottom className={classes.pageTitle}>
          Tasks Scheduler
        </Typography>
      </Grid>
      <Grid container className={classes.firstSection}>
        <Grid container className={classes.firstSectionTitle}>
          Manage your time with:
        </Grid>
        <Grid container justify={"center"} spacing={3}>
          <Grow
            in={mainCards}
            style={{ transformOrigin: "0 0 0" }}
            {...(mainCards ? { timeout: 1000 } : {})}
          >
            <Grid item>
              <PageCard />
            </Grid>
          </Grow>
          <Grow
            in={mainCards}
            style={{ transformOrigin: "0 0 0" }}
            {...(mainCards ? { timeout: 1000 } : {})}
          >
            <Grid item>
              <PageCard />
            </Grid>
          </Grow>
          <Grow
            in={mainCards}
            style={{ transformOrigin: "0 0 0" }}
            {...(mainCards ? { timeout: 1000 } : {})}
          >
            <Grid item>
              <PageCard />
            </Grid>
          </Grow>
          <Grow
            in={mainCards}
            style={{ transformOrigin: "0 0 0" }}
            {...(mainCards ? { timeout: 1000 } : {})}
          >
            <Grid item>
              <PageCard />
            </Grid>
          </Grow>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
