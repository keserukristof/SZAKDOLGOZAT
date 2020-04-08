const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  title: {
    type: String,
    require: true,
  },
  startDate: {
    type: String,
    require: true,
  },
  endDate: {
    type: String,
    require: true,
  },
  rRule: {
    type: String,
  },
  exDate: {
    type: String,
  },
  allDay: {
    type: Boolean,
  },
});

const Appointments = mongoose.model('Appointments', schema);

module.exports = Appointments;
