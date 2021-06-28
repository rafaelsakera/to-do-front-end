import React from "react";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
import { useStyles } from "./Style";

import Logo from "./img/logo.png";

const ButtonAppBar: React.FC = () => {
  const classes = useStyles();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Toolbar>
          <Link to={"/"}>
            <Button>
              <img
                className={classes.icon}
                src={Logo}
                alt="logo"
                width="30"
                height="30"
              />
            </Button>
          </Link>

          <Link to={"/today-tasks"} className={classes.link}>
            <Button className={classes.Btn}>
              <Typography variant="body1" className={classes.title}>
                Today-Tasks
              </Typography>
            </Button>
          </Link>

          <Link to={"/today-schedule"} className={classes.link}>
            <Button className={classes.Btn}>
              <Typography variant="body1" className={classes.title}>
                Today-Schedule
              </Typography>
            </Button>
          </Link>

          <Link to={"/all-tasks"} className={classes.link}>
            <Button className={classes.Btn}>
              <Typography variant="body1" className={classes.title}>
                All-Tasks
              </Typography>
            </Button>
          </Link>

          <Link to={"/full-schedule"} className={classes.link}>
            <Button className={classes.Btn}>
              <Typography variant="body1" className={classes.title}>
                Weekly-Schedule
              </Typography>
            </Button>
          </Link>
          <Button
            color="inherit"
            className={classes.out}
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
