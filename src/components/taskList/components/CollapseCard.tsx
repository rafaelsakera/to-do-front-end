import React from "react";

import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";

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
}

const CollapseCard: React.FC<Props> = ({
  tasks,
  setNewTasks,
  collapse,
  collapseIn,
  classes,
}) => {
  return (
    <Collapse
      in={collapse === collapseIn ? true : false}
      className={classes.collapse}
    >
      <Grid container className={classes.body}>
        {tasks.map((card: CardData) => (
          <Grid item className={classes.cardItem} key={card._id}>
            <CardTask data={card} overTask={false} setNewTasks={setNewTasks} />
          </Grid>
        ))}
      </Grid>
    </Collapse>
  );
};

export default CollapseCard;
