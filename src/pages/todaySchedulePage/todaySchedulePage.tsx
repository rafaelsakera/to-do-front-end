import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useStyles } from "./Style";
import { getFullDate } from "../../utils/DateUtils";
import { CardData } from "../../interfaces/CardData";
import { getTasks } from "../../API/TodayTaskAPI";
import { minTime, maxTime } from "../../utils/ScheduleUtils";

const TodaySchedulePage: React.FC = () => {
  const classes = useStyles();
  const currentDate: string = getFullDate();
  const [tasks, setTasks] = useState<CardData[]>([]);

  useEffect(() => {
    getTasks(setTasks);
  }, []);

  return (
    <div className="today-schedule-page">
      <Grid container className={classes.root} justify={"center"}>
        <Grid container justify={"center"} className={classes.page}>
          <Grid container className={classes.dateTitle} justify={"center"}>
            <h1>{currentDate}</h1>
          </Grid>

          <Grid container className={classes.calender}>
            <Paper>
              <Scheduler data={tasks}>
                <ViewState currentDate={currentDate} />
                <DayView
                  startDayHour={minTime(tasks)}
                  endDayHour={maxTime(tasks)}
                />
                <Appointments />
              </Scheduler>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodaySchedulePage;
