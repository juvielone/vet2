// @desc middleware handling exceptions inside of async
// express routes and passing them to our express error handlers
const asyncHandler = require("express-async-handler");
const Owner = require("../models/ownerModel");
const Appointment = require("../models/appointmentModel");
const Schedule = require("../models/schedModel");
const sendEmail = require("../email/transporter");

// @desc See all Users
const getOwners = asyncHandler(async (req, res) => {
  const owners = await Owner.find({});
  res.send(owners);
});

// @desc See One Users
const getOne = asyncHandler(async (req, res) => {
  const apmEmail = req.params.email;

  const owner = await Owner.findOne({ email: apmEmail });

  if (!owner) {
    res.status(400);
    throw new Error("No User exists");
  }
  res.send(owner);
});

// @desc See all Appointments
const getApm = asyncHandler(async (req, res) => {
  const appointment = await Schedule.find({});
  res.send(appointment);
});

// @desc Create Appointment
const createAppoint = asyncHandler(async (req, res) => {
  const {
    date,
    petName,
    petType,
    petAge,
    breed,
    service,
    ownerName,
    ownerAddr,
  } = req.body;

  //send error if any field is missing
  if (
    !date ||
    !petName ||
    !petType ||
    !petAge ||
    !breed ||
    !service ||
    !ownerName ||
    !ownerAddr
  ) {
    res.status(400);
    throw new Error("Please complete all text field");
  }
  const appointment = await Appointment.create({
    ownerName: ownerName,
    ownerAddr: ownerAddr,
    date: date,
    apmStatus: "Approved",
    petName: petName,
    petType: petType,
    petAge: petAge,
    breed: breed,
    service: service,
  });

  res.status(200).json(appointment);
});

// @desc Update Appointment
const updateAppoint = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const exist = await Schedule.findById(id);

  if (!exist) {
    res.status(400);
    throw new Error("No Appointment exists");
  }

  const updatedApm = await Schedule.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  // const userEmail = updatedApm.email;
  // const userStatus = updatedApm.apmStatus;
  res.json(updatedApm);
  sendEmail(updatedApm);
});

//  @desc Delete Appointment
const deleteAppoint = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const exist = await Schedule.findById(id);

  if (!exist) {
    res.status(400);
    throw new Error("No Appointment exists");
  }

  await exist.remove();

  res.json({ id: req.params.id });
});

module.exports = {
  getOwners,
  getOne,
  getApm,
  createAppoint,
  updateAppoint,
  deleteAppoint,
};
