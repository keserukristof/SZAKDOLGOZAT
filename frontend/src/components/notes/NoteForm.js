import React, { useState } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  item: {
    marginTop: 30,
    marginBottom: 30,
  },
}));

const NoteForm = ({ addNote }) => {
  const classes = useStyles();

  const [note, setNote] = useState({
    id: '',
    task: '',
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setNote({ ...note, task: e.target.value, id: uuid() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.task.trim()) {
      addNote({ ...note });
      setNote({ ...note, id: '', task: '' });
    }
  };

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
              multiline
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

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteForm;
