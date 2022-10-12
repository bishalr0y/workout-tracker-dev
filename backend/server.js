const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workoutRoutes')

const app = express()

const PORT = 4000
const MONG_URI = "mongodb://admin:password@mongo:27017/"

// middleware to log the req
app.use((req, res, next) => {
    console.log(req.method.red, req.path.cyan)
    //to go the next middleware
    next() 
})

// middleware to accept json objects (body parser)
app.use(express.json())
//middlware to convert form data to json
app.use(express.urlencoded({ extended: true }))

app.use('/api/workouts', workoutRoutes)

// Connect to the DB
mongoose.connect(MONG_URI, { useNewUrlParser: true })
    .then(() => {
        // listening to requests only when the database is connected
        app.listen(PORT, () => {
            console.log("Database connected".cyan.underline)
            console.log(`Server running at port ${PORT}`.blue.underline)
        })
    })
    .catch((err) => {
        console.log(err.message.red.underline)
    })

