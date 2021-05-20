import "date-fns";
import React from "react";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { CardData } from "../../../interfaces/CardData";
import { dateToString } from "../../../utils/DateUtils";
import useStyles from "./Style";

interface Props {
  editTask: CardData;
  setEditTask: Function;
}

const DialogForm: React.FC<Props> = ({ setEditTask, editTask }) => {
  const classes = useStyles();

  console.log(editTask.startDate.slice(0, -5))
  console.log(new Date(editTask.startDate.slice(0, -5)))

  console.log(editTask.endDate.slice(0, -5))
  console.log(new Date(editTask.endDate.slice(0, -5)))

  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(
    new Date(editTask.startDate.slice(0, -5))
  );

  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(
    new Date(editTask.endDate.slice(0, -5))
  );

  const handleStartDateChange = (date: Date | null) => {
    const strStartDate = date !== null ? dateToString(date) : "";
    setEditTask({
      ...editTask,
      startDate: strStartDate,
    });
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    const strEndDate = date !== null ? dateToString(date) : "";
    setEditTask({
      ...editTask,
      endDate: strEndDate,
    });
    setSelectedEndDate(date);
  };

  return (
    <div>
      <div className={classes.newTaskInput}>
        <TextField
          required
          className={classes.input}
          label="Task Title"
          variant="outlined"
          value={editTask.title}
          onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
        />
      </div>
      <div className={classes.newTaskInput}>
        <TextField
          required
          className={classes.input}
          label="Task Description"
          variant="outlined"
          multiline={true}
          rows={2}
          value={editTask.description}
          onChange={(e) =>
            setEditTask({ ...editTask, description: e.target.value })
          }
        />
      </div>
      <div className={classes.input}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Start Date"
              value={selectedStartDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Start Time"
              value={selectedStartDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
      <div className={classes.input}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="End Date"
              value={selectedEndDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="End Time"
              value={selectedEndDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
};

export default DialogForm;
