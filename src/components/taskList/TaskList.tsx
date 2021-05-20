import React, { useContext } from "react";

import { GetTaskContext } from "../../contexts/GetTasksContext";

import CardTask from "../cardTask/CardTask";
import { CardData } from "../../interfaces/CardData";
import ActionButtons from "./components/ActionButtons";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";

import useStyles from "./Style";

interface Props {
  tasks: CardData[];
  title: string;
}

const TaskList: React.FC<Props> = ({ tasks, title }) => {
  const classes = useStyles();

  const [collapse, setCollaps] = React.useState<number>(1);
  const [doneTasks, setDoneTasks] = React.useState<CardData[]>([]);
  const [toDoTasks, setToDoTasks] = React.useState<CardData[]>([]);
  const [missedTasks, setMissedTasks] = React.useState<CardData[]>([]);

  const { setNewTasks } = useContext(GetTaskContext);

  React.useEffect(() => {
    setDoneTasks(tasks.filter((t) => t.done));
    setToDoTasks(
      tasks.filter((t) =>
        new Date(t.endDate.slice(0, -5)) > new Date() && !t.done ? true : false
      )
    );
    setMissedTasks(
      tasks.filter((t) =>
        new Date(t.endDate.slice(0, -5)) < new Date() && !t.done ? true : false
      )
    );
  }, [tasks]);

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
        <ActionButtons setCollaps={setCollaps} />
        <Collapse
          in={collapse === 1 ? true : false}
          className={classes.collapse}
        >
          <Grid container className={classes.body}>
            {toDoTasks.map((card: CardData) => (
              <Grid item className={classes.cardItem} key={card._id}>
                <CardTask
                  data={card}
                  overTask={false}
                  setNewTasks={setNewTasks}
                />
              </Grid>
            ))}
          </Grid>
        </Collapse>
        <Collapse
          in={collapse === 2 ? true : false}
          className={classes.collapse}
        >
          <Grid container className={classes.body}>
            {doneTasks.map((card: CardData) => (
              <Grid item className={classes.cardItem} key={card._id}>
                <CardTask
                  data={card}
                  overTask={false}
                  setNewTasks={setNewTasks}
                />
              </Grid>
            ))}
          </Grid>
        </Collapse>
        <Collapse
          in={collapse === 3 ? true : false}
          className={classes.collapse}
        >
          <Grid container className={classes.body}>
            {missedTasks.map((card: CardData) => (
              <Grid item className={classes.cardItem} key={card._id}>
                <CardTask
                  data={card}
                  overTask={false}
                  setNewTasks={setNewTasks}
                />
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default TaskList;
