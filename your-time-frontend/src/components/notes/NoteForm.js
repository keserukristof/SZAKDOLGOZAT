import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import uuid from 'react-uuid'


const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(2)
    }
  },
  item: {
    marginTop: 30,
    marginBottom: 30
  }
}));

const NoteForm = ({addNote}) => {
  const classes = useStyles();

  const [note, setNote] = useState({
    id: "",
    task: "",
    completed: false
  });

  const handleTaskInputChange = e => {
    setNote({ ...note, task: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (note.task.trim()) {
      addNote({ ...note, id: uuid() });
      setNote({ ...note, task: "" });
    }
  }

  return (
    <MuiThemeProvider>
      <form onSubmit={handleSubmit}>
        <Grid container justify="space-around" className={classes.root}>
          <Grid item className={classes.item}>
            <Input
              value={note.task}
              onChange={handleTaskInputChange}
              name="task"
              placeholder="Task"
            />
          </Grid>
          <Grid item className={classes.item}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </MuiThemeProvider>
  );
};

export default NoteForm;
