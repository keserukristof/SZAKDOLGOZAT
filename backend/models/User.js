const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  notes: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Notes",
    },
  ],
  appointments: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Appointments",
    },
  ],
});

module.exports = mongoose.model("User", schema);
