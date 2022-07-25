
// @desc middleware handling exceptions inside of async 
// express routes and passing them to our express error handlers
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Owner = require('../models/ownerModel')


// @desc    Get User
// @route   GET api/owners
// @acess   Private - Admin
//====================================

// @desc    Registers User
// @route   POST api/owners/register
// @acess   Public
const registerUser = asyncHandler(async (req, res) => {
    const { fname, lname, email, phone, addr, password } = req.body

    //Checks all null fields
    if (!fname || !lname || !email || !phone || !addr || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Checks if user exists
    const userExists = await Owner.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('Email already registered')
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User
    const user = await Owner.create({
        fname,
        lname,
        email,
        phone,
        addr,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.fname,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }

})






// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}



module.exports = {
    registerUser
}


