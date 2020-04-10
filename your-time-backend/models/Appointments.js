const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
  rRule: {
    type: String,
  },
  exDate: {
    type: Date,
  },
  allDay: {
    type: Boolean,
  },
});

const Appointments = mongoose.model('Appointments', schema);

module.exports = Appointments;
