const express = require('express');

const app = express();

app.use('/api/appointments', (req, res) => {
  const appointments = [{
    title: 'Lear Node.js',
    startDate: new Date(2020, 2, 30, 9, 15),
    endDate: new Date(2020, 2, 30, 11, 30),
    id: 100,
    rRule: 'FREQ=DAILY;COUNT=3',
    exDate: '20180628T063500Z,20180626T061500Z',
  }, {
    title: 'Improve JS skills',
    startDate: new Date(2020, 2, 30, 12, 11),
    endDate: new Date(2020, 2, 30, 13, 0),
    id: 101,
    rRule: 'FREQ=DAILY;COUNT=4',
    exDate: '20180627T091100Z',
    allDay: true,
  }, {
    title: 'Improve React skills',
    startDate: new Date(2020, 2, 30, 13, 30),
    endDate: new Date(2020, 2, 30, 14, 35),
    id: 102,
    rRule: 'FREQ=DAILY;COUNT=5',
  }, {
    title: 'Homework with my little brother',
    startDate: new Date(2020, 2, 30, 10, 0),
    endDate: new Date(2020, 2, 30, 11, 0),
    id: 3,
  }];

  res.json(appointments)
})

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})