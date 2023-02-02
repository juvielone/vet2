// @desc middleware handling exceptions inside of async
// express routes and passing them to our express error handlers
const asyncHandler = require("express-async-handler");
const TimeSlot = require("../models/admin/timeSlotModel");

// @desc    Get Timemnt
// @route   GET api/timeslot
// @acess   Private
const getAllTime = asyncHandler(async (req, res) => {
  const timeslot = await TimeSlot.find({});
  res.json(timeslot);
});

// @desc    Set Time
// @route   POST api/timeslot
// @acess   Private
const sendTime = asyncHandler(async (req, res) => {
  const { dateRef, time, status } = req.body;

  //send error if any field is missing
  if (!dateRef || !time || !status) {
    res.status(400);
    throw new Error("Please complete all text field ");
  }
  const timeslot = await TimeSlot.create({
    date_ref: dateRef,
    time: time,
    status: status,
  });

  res.status(200).json(timeslot);
});

// Send Default Time
const sendDefaultTime = asyncHandler(async (req, res) => {
  const { dateRef } = req.body;
  const defaultSlots = [
    {
      date_ref: dateRef,
      time: "8:00 AM",
      status: "Open",
    },
    {
      date_ref: dateRef,
      time: "10:00 AM",
      status: "Open",
    },
    {
      date_ref: dateRef,
      time: "01:00 PM",
      status: "Open",
    },
    {
      date_ref: dateRef,
      time: "04:00 PM",
      status: "Open",
    },
  ];

  TimeSlot.insertMany(defaultSlots, function (error, docs) {
    if (error) {
      res.status(400);
      res.send(error);
    } else {
      res.status(200).json(docs);
    }
  });
});

// @desc    Delete Timemnt
// @route   Delete api/timeslot
const deleteTime = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const exist = await TimeSlot.findById(id);

  if (!exist) {
    res.status(400);
    throw new Error("No TimeSlot exists");
  }

  await exist.remove();

  res.json({ id: req.params.id });
});

// @desc    Update AppTime
// @route   PUT api/Time
const updateTime = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const exist = await TimeSlot.findById(id);

  if (!exist) {
    res.status(400);
    throw new Error("No Time slot exists");
  }

  const updatedTime = await TimeSlot.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json(updatedTime);
});

module.exports = {
  getAllTime,
  sendTime,
  deleteTime,
  updateTime,
  sendDefaultTime,
};
