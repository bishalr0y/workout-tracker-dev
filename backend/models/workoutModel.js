const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {
    timestamps: true, //adds created and last updated
})

module.exports = mongoose.model("Workout", workoutSchema) //Workouts Collection will be created