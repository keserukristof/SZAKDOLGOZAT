import React, { useState } from "react";
import NoteForm from "../components/notes/NoteForm";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import NoteList from "../components/notes/NoteList";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = note => {
    setNotes([note, ...notes]);
  };

  const toggleComplete = id => {
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          return {
            ...note,
            completed: !note.completed
          };
        }
        return note;
      })
    );
  };

  const removeNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <MuiThemeProvider>
        <Grid container justify="space-around">
          <Grid item>
            <h1>Add note!</h1>
          </Grid>
        </Grid>
      </MuiThemeProvider>
      <NoteForm addNote={addNote} />
      <NoteList
        notes={notes}
        toggleComplete={toggleComplete}
        removeNote={removeNote}
      />
    </div>
  );
};

export default Notes;
