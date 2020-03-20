import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from "@material-ui/core/TextField"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  item: {
    marginTop: 30,
    marginBottom: 70
  }
}));

export default function NotesComponent() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const classes = useStyles();

  
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.root}>
      <Grid container justify="space-around">
        <h1 id="main-text">Add note!</h1>
      </Grid>
      <Grid container justify="space-evenly">
          <TextField
            id="input-name"
            label="Name"
            type="text"
            className={classes.item}
          />
          <TextField
            id="input-content"
            label="Content"
            type="text"
            multiline
            rowsMax="3"
            className={classes.item}
          />
      </Grid>
      <Grid container justify="space-evenly" >
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          format="yyyy/MM/dd"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className={classes.item}
        />

        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          className={classes.item}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}