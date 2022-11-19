const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please add email"],
  },

  password: {
    type: String,
    required: [true, "Please add password"],
  },

  phone: {
    type: String,
    required: [true, "Please add phone number"],
  },

  filterDate: [{ date: Date }],

  filterTime: [{ time: String }],

  service: [
    {
      service_name: String,
      service_desc: String,
      service_price: Number,
    },
  ],
});

module.exports = mongoose.model("Admin", adminSchema);
