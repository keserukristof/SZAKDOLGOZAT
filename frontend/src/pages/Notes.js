import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../context/auth-contex';

import { Grid } from '@material-ui/core';

import NoteForm from '../components/notes/NoteForm';
import NoteList from '../components/notes/NoteList';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const auth = useContext(AuthContext);
  const userId = auth.userId;

  useEffect(() => {
    console.log(userId);
    axios.get(`http://localhost:5000/api/notes/user/${userId}`).then((res) => {
      const notesData = res.data;
      console.log(notesData);
      setNotes([...notesData.notes]);
    });
  }, [userId]);

  const addNote = (note) => {
    console.log(notes);
    setNotes([...notes, note]);

    fetch('http://localhost:5000/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: note.id,
        task: note.task,
        completed: note.completed,
        creator: auth.userId,
      }),
    });

    console.log(note);
  };

  const toggleComplete = (id) => {
    let noteToSend;
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          noteToSend = note;
          return {
            ...note,
            completed: !note.completed,
          };
        }
        return note;
      })
    );
    noteToSend = { ...noteToSend, completed: !noteToSend.completed };
    console.log(noteToSend)
    fetch(`http://localhost:5000/api/notes/${noteToSend._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: noteToSend.completed,
      }),
    });
  };

  const removeNote = (id) => {
    const noteToDelete = notes.find((note) => note.id === id)
    console.log(noteToDelete)
    setNotes(notes.filter((note) => note.id !== id));
    fetch(`http://localhost:5000/api/notes/${noteToDelete._id}`, {
      method: 'DELETE',
    });
  };

  return (
    <div>
      <Grid container justify="space-around">
        <Grid item>
          <h1>Add note!</h1>
        </Grid>
      </Grid>
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
