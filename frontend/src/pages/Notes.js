import React from 'react';
import axios from 'axios';

import { AuthContext } from '../context/auth-contex';

import { Grid } from '@material-ui/core';

import NoteForm from '../components/notes/NoteForm';
import NoteList from '../components/notes/NoteList';

class Notes extends React.Component {
  static contextType = AuthContext;
  // const [notes, setNotes] = useState([]);
  // const auth = useContext(AuthContext);
  // const userId = auth.userId;
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
    const auth = this.context;
    const userId = auth.userId;
    axios
      .get(`http://localhost:5000/api/notes/user/${userId}`, {
        headers: {
          Authorization: 'Bearer ' + auth.token,
        },
      })
      .then((res) => {
        const notesData = res.data.notes;
        console.log(notesData);
        this.setState({ notes: notesData });
      });
  }

  addNote = async (note) => {
    const auth = this.context;
    const userId = auth.userId;
    console.log(note);
    const updated = await fetch('http://localhost:5000/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token,
      },
      body: JSON.stringify({
        id: note.id,
        task: note.task,
        completed: note.completed,
        creator: auth.userId,
      }),
    });
    if (updated) {
      axios
        .get(`http://localhost:5000/api/notes/user/${userId}`, {
          headers: {
            Authorization: 'Bearer ' + auth.token,
          },
        })
        .then((res) => {
          this.setState({ notes: res.data.notes });
        });
    }

    console.log(this.state.notes);
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

    console.log(noteToSend);

    const auth = this.context;
    fetch(`http://localhost:5000/api/notes/${noteToSend._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token,
      },
      body: JSON.stringify({
        completed: noteToSend.completed,
      }),
    });
  };

  removeNote = (id) => {
    const auth = this.context;
    const noteToDelete = this.state.notes.find((note) => note.id === id);
    console.log(noteToDelete);
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
    fetch(`http://localhost:5000/api/notes/${noteToDelete._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + auth.token,
      },
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
