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

import { dateToString, getDateAndExtra } from "../../../utils/DateUtils";

import useStyles from "./Style";

const DialogForm: React.FC<{ newTask: Object; setNewTask: Function }> = ({
  setNewTask,
  newTask,
}) => {
  const classes = useStyles();
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(
    new Date()
  );

  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(
    getDateAndExtra("hours", 1)
  );

  React.useEffect(() => {
    const strStartDate =
      selectedStartDate !== null ? dateToString(selectedStartDate) : "";

    const strEndDate =
      selectedEndDate !== null ? dateToString(selectedEndDate) : "";

    setNewTask({
      ...newTask,
      startDate: strStartDate,
      endDate: strEndDate,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStartDate, selectedEndDate]);

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
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
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
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
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
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
