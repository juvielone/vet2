const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/ownerController')



router.route('/register').post(registerUser)
// router.route('/:id').put(updateAppoint).delete(deleteAppoint)

module.exports = router



