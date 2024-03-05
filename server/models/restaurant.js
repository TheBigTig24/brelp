const mongoose = require('mongoose')

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    restName: {
        type: String,
        required: true
    },
    restLocation: {
        type: String,
        required: true
    },
    restAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    sunHours: {
        type: String,
        required: true
    },
    monHours: {
        type: String,
        required: true
    },
    tueHours: {
        type: String,
        required: true
    },
    wedHours: {
        type: String,
        required: true
    },
    thuHours: {
        type: String,
        required: true
    },
    friHours: {
        type: String,
        required: true
    },
    satHours: {
        type: String,
        required: true
    },
    menuLink: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)