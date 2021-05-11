import { useStyles } from "./Style";
import { WeekView } from "@devexpress/dx-react-scheduler-material-ui";

export const TimeTableCell = (props: any) => {
  const classes = useStyles();
  const { startDate } = props;
  const date = new Date(startDate);

  if (date.getDate() === new Date().getDate())
    return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;

  if (date.getDay() === 5 || date.getDay() === 6)
    return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;

  return <WeekView.TimeTableCell {...props} />;
};

export const DayScaleCell = (props: any) => {
  const classes = useStyles();
  const { startDate, today } = props;

  if (today)
    return <WeekView.DayScaleCell {...props} className={classes.today} />;

  if (startDate.getDay() === 5 || startDate.getDay() === 6)
    return <WeekView.DayScaleCell {...props} className={classes.weekend} />;

  return <WeekView.DayScaleCell {...props} />;
};
