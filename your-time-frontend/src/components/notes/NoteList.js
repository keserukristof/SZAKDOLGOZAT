import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

import Note from './Note';

const NoteList = ({ notes, toggleComplete, removeNote }) => {
  return (
    <List>
      <Grid container spacing={4}>
        {notes.map((note) => (
          <Grid item xs>
            <Note
              key={note.id}
              note={note}
              toggleComplete={toggleComplete}
              removeNote={removeNote}
            />
          </Grid>
        ))}
      </Grid>
    </List>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
};

export default NoteList;
