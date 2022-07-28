const express = require('express');
const router = express.Router();
const { getAppoint, sendAppoint, updateAppoint, deleteAppoint } = require('../controllers/appointController')



router.route('/').get(getAppoint).post(sendAppoint)
router.route('/:id').put(updateAppoint).delete(deleteAppoint)

module.exports = router



