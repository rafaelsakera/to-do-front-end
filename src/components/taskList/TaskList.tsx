import React  from "react";

import CardTask from "../cardTask/CardTask";
import { CardData } from "../../interfaces/CardData";


import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import useStyles from "./Style";

interface Props {
  tasks: CardData[];
  title: string;
  setNewTasks: Function
}

const TaskList: React.FC<Props> = ({ tasks, title, setNewTasks }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center">
      <Grid container className={classes.page}>
        <Grid container className={classes.title} justify="center">
          <Grid item className={classes.item}>
            <Typography className={classes.titleText} variant="h4">
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.body}>
          {tasks.map((card) => {
            let overTask = new Date(card.endDate) < new Date();
            return (
              <Grid item className={classes.cardItem} key={card._id}>
                <CardTask data={card} overTask={overTask} setNewTasks={setNewTasks}/>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskList;
