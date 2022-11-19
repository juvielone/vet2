const express = require('express');
const router = express.Router();
const { getOwners, getOne, getApm, updateAppoint, deleteAppoint } = require('../controllers/adminController');
const {createAdmin} = require("../controllers/configController");

// http://localhost:Port/admin/

// External API REQUESTS =======================

// Get All Owners
router.route('/owners').get(getOwners);

// Get All Appointments
router.route('/sched').get(getApm);

// Get Certain User
router.route('/:id').get(getOne)


// Update and Delete Specific Appointment
router.route('/:id').put(updateAppoint).delete(deleteAppoint)


// INTERNAL API REQUEST =======================
// Creates admin (Developers only)
router.route('/config/dev').post(createAdmin)

// Authenticate admin
// router.route('/config').post(loginAdmin)

// Update & Authorize Actions
// router.route('/config').put(updateAdmin)







module.exports = router