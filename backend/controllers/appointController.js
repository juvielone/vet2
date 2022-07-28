
// @desc middleware handling exceptions inside of async 
// express routes and passing them to our express error handlers
const asyncHandler = require('express-async-handler');
const Appointment = require('../models/appointmentModel')
const Owner = require('../models/ownerModel')






// @desc    Get Appointmnt
// @route   GET api/appointment
// @acess   Private
const getAppoint = asyncHandler(async (req, res) => {
    const appointment = await Appointment.find({ user: req.user })
    res.json(appointment);

})


// @desc    Set Appointmnt
// @route   POST api/appointment
// @acess   Private
const sendAppoint = asyncHandler(async (req, res) => {
    const { date, service, petName, } = req.body


    //send error if any field is missing
    if (!date || !service || !petName) {
        res.status(400)
        throw new Error('Please add a text field')

    }
    const appointment = await Appointment.create({
        date: date,
        service: service,
        petName: petName,
        user: req.user.id
    })


    res.status(200).json(appointment);

});

// @desc    Update Appointmnt
// @route   PUT api/appointment
// @acess   Private
const updateAppoint = asyncHandler(async (req, res) => {


    const appoint = await Appointment.findById(req.params.id);

    if (!appoint) {
        res.status(400);
        throw new Error('No Appointment exists');
    }

    const user = await Owner.findById(req.user.id)

    //Check if user doesn' exist
    if (!user) {
        res.status(400);
        throw new Error('User not found');
    }

    //Mathce appointment's user to user id
    if (appoint.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not Authorize');
    }




    const updatedApm = await Appointment.findByIdAndUpdate(appoint, req.body, { new: true })
    res.json(updatedApm);

});



// @desc    Delete Appointmnt
// @route   Delete api/appointment
// @acess   Private
const deleteAppoint = asyncHandler(async (req, res) => {
    const appoint = await Appointment.findById(req.params.id);

    if (!appoint) {
        res.status(400);
        throw new Error('No Appointment exists');
    }

    const user = await Owner.findById(req.user.id)

    //Check if user doesn' exist
    if (!user) {
        res.status(400);
        throw new Error('User not found');
    }

    //Mathce appointment's user to user id
    if (appoint.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not Authorize');
    }





    await appoint.remove()

    res.json({ id: req.params.id });

});


module.exports = {
    getAppoint, sendAppoint, updateAppoint, deleteAppoint
}
