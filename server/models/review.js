const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    restaurantName: {
        type: String,
        required: true
    },
    reviewBody: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema)