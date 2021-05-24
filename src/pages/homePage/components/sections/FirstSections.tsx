import React from "react";

import { useStyles } from "../../Style";
import PageCard from "../Card";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";

const FirstSection: React.FC = () => {
  const classes = useStyles();
  const [mainCards, setMaincard] = React.useState(false);

  React.useEffect(() => {
    setMaincard(true);
  }, []);

  return (
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
            <PageCard title={""} />
          </Grid>
        </Grow>
        <Grow
          in={mainCards}
          style={{ transformOrigin: "0 0 0" }}
          {...(mainCards ? { timeout: 1000 } : {})}
        >
          <Grid item>
            <PageCard title={""} />
          </Grid>
        </Grow>
        <Grow
          in={mainCards}
          style={{ transformOrigin: "0 0 0" }}
          {...(mainCards ? { timeout: 1000 } : {})}
        >
          <Grid item>
            <PageCard title={""} />
          </Grid>
        </Grow>
        <Grow
          in={mainCards}
          style={{ transformOrigin: "0 0 0" }}
          {...(mainCards ? { timeout: 1000 } : {})}
        >
          <Grid item>
            <PageCard title={""} />
          </Grid>
        </Grow>
      </Grid>
    </Grid>
  );
};

export default FirstSection;
