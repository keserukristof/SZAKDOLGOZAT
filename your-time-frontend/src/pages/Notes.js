import React, { Component } from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core';

import NoteForm from '../components/notes/NoteForm';
import NoteList from '../components/notes/NoteList';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.addNote = this.addNote.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  componentDidMount() {
    axios.get('/api/notes').then((res) => {
      const notes = res.data;
      this.setState({ notes });
    });
  }

  addNote = (note) => {
    this.setState({ notes: [...this.state.notes, note] });
    axios.post('/api/notes', note).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  toggleComplete = (id) => {
    let noteToSend;
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          noteToSend = note;
          return {
            ...note,
            completed: !note.completed,
          };
        }
        return note;
      }),
    });
    noteToSend = { ...noteToSend, completed: !noteToSend.completed };
    axios.patch('api/notes', noteToSend).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  removeNote = (id) => {
    console.log(id);
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
    axios.delete('api/notes/', { params: { id: id } }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <Grid container justify="space-around">
          <Grid item>
            <h1>Add note!</h1>
          </Grid>
        </Grid>
        <NoteForm addNote={this.addNote} />
        <NoteList
          notes={this.state.notes}
          toggleComplete={this.toggleComplete}
          removeNote={this.removeNote}
        />
      </div>
    );
  }
}

export default Notes;
