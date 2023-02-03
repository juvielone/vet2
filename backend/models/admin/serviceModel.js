const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  srvName: {
    type: String,
  },

  srvDesc: {
    type: String,
  },

  srvFee: {
    type: String,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
