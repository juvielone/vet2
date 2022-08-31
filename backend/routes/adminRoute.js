const express = require('express');
const router = express.Router();
const { getOwners, getApm, updateAppoint, deleteAppoint } = require('../controllers/adminController')


router.route('/owners').get(getOwners);
router.route('/sched').get(getApm);
router.route('/:id').put(updateAppoint).delete(deleteAppoint)





module.exports = router