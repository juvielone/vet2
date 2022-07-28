const express = require('express');
const router = express.Router();
const { getAppoint, sendAppoint, updateAppoint, deleteAppoint } = require('../controllers/appointController')
const { protect } = require('../middleware/authMid')



router.route('/').get(protect, getAppoint).post(protect, sendAppoint)
router.route('/:id').put(protect, updateAppoint).delete(protect, deleteAppoint)

module.exports = router



