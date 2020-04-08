const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

//database connection
const mongoose = require('mongoose');
const dbLocation =
  'mongodb+srv://keserukristof:mongodb@yourtime-vfmvb.mongodb.net/test?retryWrites=true&w=majority';

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

app.use('/api/appointments', appointments)















const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
