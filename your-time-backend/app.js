const express = require('express');
const bodyParser = require('body-parser');

const timetableRoutes = require('./routes/timetable-routes')

const app = express();

app.use('/time-table', timetableRoutes)

app.listen(5000);
