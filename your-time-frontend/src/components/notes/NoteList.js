import React from "react";
import Note from "./Note";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

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

export default NoteList;
