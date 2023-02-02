const express = require("express");
const router = express.Router();
const {
  getOwners,
  getOne,
  getApm,
  createAppoint,
  updateAppoint,
  deleteAppoint,
} = require("../controllers/adminController");
const { createAdmin } = require("../controllers/configController");
const {
  getAllTime,
  sendTime,
  deleteTime,
  updateTime,
  sendDefaultTime,
} = require("../controllers/timeSlotController");

// http://localhost:Port/admin/

// External API REQUESTS =======================

// Get All Owners
router.route("/owners").get(getOwners);

// Get All Appointments
router.route("/sched").get(getApm);

// Create and read timeslot
router.route("/timeslot").get(getAllTime).post(sendTime);
// Create default Slot
router.route("/timeslot/default").post(sendDefaultTime);

// Delete timeslot
router.route("/timeslot/:id").delete(deleteTime).put(updateTime);

// Get Certain User
router.route("/:email").get(getOne);

// Create Appointment without user
router.route("/create/apm").post(createAppoint);

// Update and Delete Specific Appointment
router.route("/:id").put(updateAppoint).delete(deleteAppoint);

// INTERNAL API REQUEST =======================
// Creates admin (Developers only)
router.route("/config/dev").post(createAdmin);

// Authenticate admin
// router.route('/config').post(loginAdmin)

// Update & Authorize Actions
// router.route('/config').put(updateAdmin)

module.exports = router;
