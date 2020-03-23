import React, { useState } from "react";
import NoteForm from "../components/notes/NoteForm";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import NoteList from "../components/notes/NoteList";
import { useSpring, animated } from "react-spring";


const Notes = () => {
  const animation = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: { duration: 1000 }
  });
  
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
    <animated.div style={animation}>
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
    </animated.div>
  );
};

export default Notes;
