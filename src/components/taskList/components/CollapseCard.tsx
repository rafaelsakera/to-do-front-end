import React from "react";

import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";

import EmptyTasks from "./EmptyTasks";

import CardTask from "../../cardTask/CardTask";
import { CardData } from "../../../interfaces/CardData";

interface Props {
  tasks: CardData[];
  setNewTasks: Function;
  collapse: number;
  collapseIn: number;
  classes: {
    collapse: string;
    body: string;
    cardItem: string;
  };
  state: string;
}

const CollapseCard: React.FC<Props> = ({
  tasks,
  setNewTasks,
  collapse,
  collapseIn,
  classes,
  state,
}) => {
  const getState = () => {
    switch (collapseIn) {
      case 1:
        return "toDo";
      case 2:
        return "done";
      case 3:
        return "over";
      default:
        return "";
    }
  };

  const tasksList = () => {
    if (tasks.length === 0) {
      return (
        <Grid container className={classes.body}>
          <EmptyTasks state={getState()} />
        </Grid>
      );
    } else {
      return (
        <Grid container className={classes.body}>
          {tasks.map((card: CardData) => (
            <Grid item className={classes.cardItem} key={card._id}>
              <CardTask data={card} state={state} setNewTasks={setNewTasks} />
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  return (
    <Collapse
      in={collapse === collapseIn ? true : false}
      className={classes.collapse}
    >
      {tasksList()}
    </Collapse>
  );
};

export default CollapseCard;
