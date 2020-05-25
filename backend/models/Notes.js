const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  id: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    require: true,
  },
  creator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Notes = mongoose.model("Notes", schema);

module.exports = Notes;
