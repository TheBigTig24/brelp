const express = require('express')
const RestaurantObject = require('../models/restaurant')
const router = express.Router()

// GET all restaurants
router.get('/', async (req, res) => {
    const restaurants = await RestaurantObject.find({})
    res.send(restaurants)
})

// GET one restaurant
router.get('/getRestByName/:restaurantName', async (req, res) => {
    const queryName = req.query.restName
    const restaurant = await RestaurantObject.find({restName: queryName})
    res.send(restaurant)
})

// POST new restaurant
router.post('/', async (req, res) => {
    const { restName, restLocation, restAddress, phoneNumber, sunHours, monHours, tueHours, wedHours, thuHours, friHours, satHours, menuLink } = req.body
    try {
        const restaurant = await RestaurantObject.create({restName, restLocation, restAddress, phoneNumber, sunHours, monHours, tueHours, wedHours, thuHours, friHours, satHours, menuLink})
        res.json(restaurant)
    } catch (error) {
        res.send("ruh roh, seems there's a post issue??")
    }
})

// DELETE a restaurant just cuz
router.delete('/', async (req, res) => {
    const name = req.body.restName
    const restaurant = await RestaurantObject.deleteOne({restName: name})
    res.send(restaurant)
})


module.exports = router;