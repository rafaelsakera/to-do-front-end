import React, { useContext } from "react";

import { GetTaskContext } from "../../contexts/GetTasksContext";

import { CardData } from "../../interfaces/CardData";
import ActionButtons from "./components/ActionButtons";
import CollapseCard from "./components/CollapseCard";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

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
        <ActionButtons setCollaps={setCollaps} collapse={collapse} />
        {[
          { tasks: toDoTasks, collaps: 1, state: "toDo" },
          { tasks: doneTasks, collaps: 2, state: "done" },
          { tasks: missedTasks, collaps: 3, state: "over" },
        ].map((t) => (
          <CollapseCard
            key={t.collaps}
            tasks={t.tasks}
            setNewTasks={setNewTasks}
            collapse={collapse}
            collapseIn={t.collaps}
            classes={classes}
            state={t.state}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default TaskList;
