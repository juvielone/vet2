const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({


    date: {
        type: Date,
        required: [true, 'Please add a text value']
    },

    service: {
        type: String,
        required: [true, 'Please add a text value']

    },

    petName: {
        type: String,
        required: [true, 'Please add a text value']
    }

})

module.exports = mongoose.model('Appointment', appointmentSchema)