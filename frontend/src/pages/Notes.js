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
    console.log(userId)
    axios.get(`http://localhost:5000/api/notes/user/${userId}`).then((res) => {
      const notesData = res.data;
      console.log(notesData);
      setNotes([...notesData.notes]);
    });
  }, [userId]);

  const addNote = (note) => {
    console.log(notes)
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
    
    console.log(note)
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
    axios.patch('api/notes', noteToSend).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const removeNote = (id) => {
    console.log(id);
    setNotes(notes.filter((note) => note.id !== id));
    axios.delete('api/notes/', { params: { id: id } }).then((res) => {
      console.log(res);
      console.log(res.data);
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
