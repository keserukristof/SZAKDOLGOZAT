import React, { useState } from "react";
import NoteForm from "../components/notes/NoteForm";
import { MuiThemeProvider, Grid } from "@material-ui/core";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = note => {
    setNotes([note, ...notes]);
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
      <NoteForm addNote={addNote}/>
    </div>
  );
};

export default Notes;
