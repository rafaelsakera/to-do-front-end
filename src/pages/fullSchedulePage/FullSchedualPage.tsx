import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  DateNavigator,
  Toolbar,
} from "@devexpress/dx-react-scheduler-material-ui";

import { getTasks } from "../../API/AllTaskAPI";
import { CardData } from "../../interfaces/CardData";
import { TimeTableCell, DayScaleCell } from "./Utils";
import { minTime, maxTime } from "../../utils/ScheduleUtils";

const FullSchedualPage: React.FC = () => {
  const [tasks, setTasks] = useState<CardData[]>([]);

  useEffect(() => {
    getTasks(setTasks);
  }, []);

  return (
    <Paper>
      <Scheduler data={tasks}>
        <ViewState />
        <WeekView
          startDayHour={minTime(tasks)}
          endDayHour={maxTime(tasks)}
          timeTableCellComponent={TimeTableCell}
          dayScaleCellComponent={DayScaleCell}
        />
        <Appointments />
        <Toolbar />
        <DateNavigator />
      </Scheduler>
    </Paper>
  );
};

export default FullSchedualPage;
