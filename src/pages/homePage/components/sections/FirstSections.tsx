import React from "react";

import { useStyles } from "../../Style";
import PageCard from "../Card";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";

import Logo from "../../img/illustration.svg";

const FirstSection: React.FC = () => {
  const classes = useStyles();
  const [mainCards, setMaincard] = React.useState(false);

  React.useEffect(() => {
    setMaincard(true);
  }, []);

  return (
    <Grid container className={classes.firstSection}>
      <Grid item className={classes.firstSectionTitle}>
        <Grow
          in={mainCards}
          style={{ transformOrigin: "0 0 0" }}
          {...(mainCards ? { timeout: 1000 } : {})}
        >
          <div className={classes.firstSectionTitleCenetr}>
            Manage your time with
            <h1 className={classes.pageTitle}>Tasks Scheduler</h1>
            <img className={classes.logo} src={Logo} alt="logo.." />
          </div>
        </Grow>
      </Grid>
      <Grid item className={classes.firstSectionOption}>
        <Grid
          container
          justify={"center"}
          className={classes.firstSectionOptionCenter}
        >
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
        <Grid container justify={"center"}>
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
    </Grid>
  );
};

export default FirstSection;
