// @desc middleware handling exceptions inside of async
// express routes and passing them to our express error handlers
const asyncHandler = require("express-async-handler");
const Schedule = require("../models/schedModel");

// @desc    Get Schedmnt
// @route   GET api/appointment
// @acess   Private
const getSched = asyncHandler(async (req, res) => {
  const email = req.params.email;

  const schedule = await Schedule.find({ email: email });
  res.json(schedule);
});

// @desc    Set Schedmnt
// @route   POST api/appointment
// @acess   Private
const sendSched = asyncHandler(async (req, res) => {
  const { date, time, petName, petType, petAge, breed, service, email } =
    req.body;

  //send error if any field is missing
  if (
    !date ||
    !time ||
    !petName ||
    !petType ||
    !petAge ||
    !breed ||
    !service ||
    !email
  ) {
    res.status(400);
    throw new Error("Please complete all text field");
  }
  const appointment = await Schedule.create({
    email: email,
    date: date,
    time: time,
    apmStatus: "Pending",
    petName: petName,
    petType: petType,
    petAge: petAge,
    breed: breed,
    service: service,
  });

  res.status(200).json(appointment);
});

// @desc    Update Schedmnt
// @route   PUT api/appointment
// @acess   Private
const updateSched = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const exist = await Schedule.findById(id);

  if (!exist) {
    res.status(400);
    throw new Error("No Schedule exists");
  }

  const updatedApm = await Schedule.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json(updatedApm);
});

// @desc    Delete Schedmnt
// @route   Delete api/appointment
// @acess   Private
const deleteSched = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const exist = await Schedule.findById(id);

  if (!exist) {
    res.status(400);
    throw new Error("No Schedule exists");
  }

  await exist.remove();

  res.json({ id: req.params.id });
});

module.exports = {
  getSched,
  sendSched,
  updateSched,
  deleteSched,
};
