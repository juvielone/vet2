const mongoose = require("mongoose");

const promoSchema = mongoose.Schema({
  promoName: {
    type: String,
  },

  promoDesc: {
    type: String,
  },

  promoCode: {
    type: String,
  },

  promoDiscount: {
    type: Number,
  },
});

module.exports = mongoose.model("Promo", promoSchema);
