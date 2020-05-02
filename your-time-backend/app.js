const express = require('express');
const app = express();
const cors = require('cors');
const dbLocation = require('./DataBaseConnection')

app.use(express.json());
app.use(cors());

//database connection
const mongoose = require('mongoose');


mongoose.connect(dbLocation, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

connection.once('open', function callback () {
  console.log("Successful connection!");
});

const appointments = require('./routes/appointments')
const notes = require('./routes/notes')

app.use('/api/appointments', appointments)
app.use('/api/notes', notes)

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
