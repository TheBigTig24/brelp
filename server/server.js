require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const reviewsRoute = require('./routes/Reviews')
const usersRoute = require('./routes/Users')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

var cors = require('cors')
app.use(cors())


// routes
// app.use('/api/reviews', reviewsRoute)

const reviewsRouter = require('./routes/Reviews')
app.use("/reviews", reviewsRouter)

const usersRouter = require('./routes/Users')
app.use("/users", usersRouter)

const restaurantsRouter = require('./routes/Restaurants')
app.use("/restaurants", restaurantsRouter)


// mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })




