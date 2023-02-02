const mongoose = require("mongoose");

const timeSlotSchema = mongoose.Schema({
  date_ref: {
    type: Date,
    required: [true, "Please add a date"],
  },

  time: {
    type: String,
  },

  status: {
    type: String,
  },
});

module.exports = mongoose.model("Timeslot", timeSlotSchema);
