const express = require('express')
const ReviewObject = require('../models/review')
const { resolveNaptr } = require('dns')
const router = express.Router()

// GET all reviews just cuz
router.get('/', async (req, res) => {
    const reviews = await ReviewObject.find({})
    res.send(reviews)
})

// get all restaurants of a specific name
router.get('/:restaurantName', async (req, res) => {
    const restName = req.query.restaurantName
    const reviews = await ReviewObject.find({restaurantName: restName})
    res.send(reviews);
})

// add a new review to the db
router.post('/', async (req, res) => {
    const {restaurantName, reviewBody} = req.body
    try {
        const review1 = await ReviewObject.create({restaurantName, reviewBody})
        res.json(review1)
    } catch (error) {
        res.send("theres a fucking post error")
    }
})

//this is fucking useless
router.delete('/', (req, res) => {
    
    res.json({mssg: 'DElete'})
})

module.exports = router;