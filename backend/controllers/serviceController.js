// @desc middleware handling exceptions inside of async
// express routes and passing them to our express error handlers
const asyncHandler = require("express-async-handler");
const Service = require("../models/admin/serviceModel");

// @desc    Get Timemnt
// @route   GET api/timeslot
// @acess   Private
const getAllService = asyncHandler(async (req, res) => {
  const services = await Service.find({});
  res.json(services);
});

// @desc    Set Time
// @route   POST api/timeslot
// @acess   Private
const sendService = asyncHandler(async (req, res) => {
  const { serviceName, serviceDesc, serviceFee } = req.body;

  //send error if any field is missing
  if (!serviceName || !serviceDesc || !serviceFee) {
    res.status(400);
    throw new Error("Please complete all service field ");
  }
  const services = await Service.create({
    srvName: serviceName,
    srvDesc: serviceDesc,
    srvFee: serviceFee,
  });

  res.status(200).json(services);
});

// @desc    Delete Timemnt
// @route   Delete api/timeslot
const deleteService = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const exist = await Service.findById(id);

  if (!exist) {
    res.status(400);
    throw new Error("No Services exists");
  }

  await exist.remove();

  res.json({ id: req.params.id });
});

// @desc    Update AppTime
// @route   PUT api/Time
const updateService = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const exist = await Service.findById(id);

  if (!exist) {
    res.status(400);
    throw new Error("No services exists");
  }

  const updatedService = await Service.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json(updatedService);
});

module.exports = {
  sendService,
  getAllService,
  deleteService,
  updateService,
};
