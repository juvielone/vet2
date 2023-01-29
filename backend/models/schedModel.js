const mongoose = require("mongoose");

const scheduleSchema = mongoose.Schema({
  email: {
    type: "String",
    required: [true, "Please add an email"],
  },

  // Admin inputs
  ownerName: {
    type: String,
  },

  // Admin inputs
  ownerAddr: {
    type: String,
  },
  apmStatus: {
    type: String,
    required: [true, "Please add City"],
  },

  date: {
    type: Date,
    required: [true, "Please add a date"],
  },

  time: {
    type: String,
  },

  petName: {
    type: String,
    required: [true, "Please add a pet name"],
  },

  petType: {
    type: String,
    required: [true, "Please add a pet type"],
  },

  petAge: {
    type: String,
    required: [true, "Please add pet age"],
  },

  breed: {
    type: String,
    required: [true, "Please add a breed"],
  },

  service: {
    type: String,
    required: [true, "Please add service"],
  },
});

module.exports = mongoose.model("Schedule", scheduleSchema);
