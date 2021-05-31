import React from "react";

import DoneNothing from "../img/notingDone.jpg";
import DoNothing from "../img/doNothingjpg.jpg";
import GreatJob from "../img/images.jpg";

import useStyles from "../Style";

const EmptyTasks: React.FC<{ state: string }> = ({ state }) => {
  let img;
  const classes = useStyles();

  switch (state) {
    case "done":
      img = <img className={classes.imgR} src={DoNothing} alt="DoneNothing" />;
      break;
    case "toDo":
      img = (
        <img
          className={classes.imgR}
          src={DoneNothing}
          alt="DoneNothing"
          height="250"
          width="250"
        />
      );
      break;
    case "over":
      img = <img className={classes.imgR} src={GreatJob} alt="DoneNothing" />;
      break;
  }

  return <div className={classes.img}>{img}</div>;
};

export default EmptyTasks;
