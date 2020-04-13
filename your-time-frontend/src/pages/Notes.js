import React, { Component } from 'react'
import NoteForm from "../components/notes/NoteForm";
import {Grid} from "@material-ui/core";
import NoteList from "../components/notes/NoteList";


export default class NotesClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
    this.addNote = this.addNote.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.removeNote = this.removeNote.bind(this)
  }

  componentDidMount() {
    fetch('/api/notes')
      .then((res) => res.json())
      .then((notes) => {
        if (notes) {
          for (const note of notes) {            
            this.setState({notes: [ ...this.state.notes, note ]})
          }
        }
      });
  }

  addNote = note => {
    this.setState({notes: [ ...this.state.notes, note ]})
    console.log(this.state.notes)
  }

  toggleComplete = id => {
    this.setState(
      this.notes.map(note => {
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

  removeNote = id => {
    this.setState(this.notes.filter(note => note.id !== id));
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
