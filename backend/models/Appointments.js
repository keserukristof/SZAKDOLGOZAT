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
  notes: {
    type: String
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
  creator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Appointments = mongoose.model('Appointments', schema);

module.exports = Appointments;
