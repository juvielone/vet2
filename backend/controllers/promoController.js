// @desc middleware handling exceptions inside of async
// express routes and passing them to our express error handlers
const asyncHandler = require("express-async-handler");
const Promo = require("../models/admin/promoModel");

// @desc    Get Promos
// @route   GET api/Promos
// @acess   Private
const getAllPromo = asyncHandler(async (req, res) => {
  const promos = await Promo.find({});
  res.json(promos);
});

// @desc    Set Promos
// @route   POST api/Promos
// @acess   Private
const sendPromo = asyncHandler(async (req, res) => {
  const { promoName, promoDesc, promoCode, promoDiscount } = req.body;

  //send error if any field is missing
  if (!promoName || !promoDesc || !promoCode || !promoDiscount) {
    res.status(400);
    throw new Error("Please complete all Promo field ");
  }
  const promos = await Promo.create({
    promoName: promoName,
    promoDesc: promoDesc,
    promoCode: promoCode,
    promoDiscount: promoDiscount,
  });

  res.status(200).json(promos);
});

// @desc    Delete Promo
// @route   Delete api/Promo
const deletePromo = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const exist = await Promo.findById(id);

  if (!exist) {
    res.status(400);
    throw new Error("No Promos exists");
  }

  await exist.remove();

  res.json({ id: req.params.id });
});

// @desc    Update AppTime
// @route   PUT api/Time
const updatePromo = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const exist = await Promo.findById(id);

  if (!exist) {
    res.status(400);
    throw new Error("No Promos exists");
  }

  const updatedPromo = await Promo.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json(updatedPromo);
});

module.exports = {
  sendPromo,
  getAllPromo,
  deletePromo,
  updatePromo,
};
