import React from "react";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import FirstSection from "./components/FirstSection";
import Actions from "./components/Actions";

import { CardData } from "../../interfaces/CardData";
import { baseCardStyle } from "./Style";

interface Props {
  data: CardData;
  state: string;
  setNewTasks: Function;
}

const CardTask: React.FC<Props> = ({ data, state, setNewTasks }) => {
  const classes = baseCardStyle();
  let root;

  switch (state) {
    case "toDo":
      root = classes.root;
      break;
    case "done":
      root = classes.done;
      break;
    case "over":
      root = classes.overTime;
      break;
  }

  return (
    <Card className={root} variant="outlined">
      <CardContent>
        <Grid container spacing={6}>
          <Grid item className={classes.firstSection}>
            <FirstSection
              titleStyle={classes.title}
              title={data.title}
              startDate={data.startDate}
              endDate={data.endDate}
            />
          </Grid>
          <Grid item>
            <div className={classes.line}></div>
          </Grid>
          <Grid item className={classes.secondSection}>
            <Typography variant="body2">{data.description}</Typography>
          </Grid>
          <Grid item>
            <div className={classes.line}></div>
          </Grid>
          <Grid item className={classes.thirdSection}>
            <Actions id={data._id} setNewTasks={setNewTasks} done={data.done} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardTask;
