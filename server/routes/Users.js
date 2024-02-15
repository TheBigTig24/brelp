const express = require('express')
const UserObject = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) => {
    const users = await UserObject.find({})
    res.send(users)
})

router.get('/:userId', async (req, res) => {
    const id = req.query.userId
    const singleUser = await UserObject.find({userId: id})

    res.send(singleUser)
})

router.get('/user/:email', async (req, res) => {
    const email = req.query.email
    const password = req.query.password
    const singleUser = await UserObject.find({email: email, password: password})
    res.send(singleUser)

})

router.get('/getLatestAccount/acc', async (req, res) => {
    const time = await UserObject.find().sort({ userId: -1})
    res.send(time[0])
})

router.post('/', async (req, res) => {
    const {userId, username, email, password} = req.body
    try {
        const user = await UserObject.create({userId, username, email, password})
        res.json(user)
    } catch (error) {
        res.send("failed to create user")
    }
})

router.delete('/', async (req, res) => {
    const user = await UserObject.deleteOne({})
    res.send(user)
})


module.exports = router;