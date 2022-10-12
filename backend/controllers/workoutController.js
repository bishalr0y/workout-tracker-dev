const mongoose = require('mongoose')
const Workout = require('../models/workoutModel')

//@desc: Create workout
//@router: POST /api/workouts/
//@access: Public
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body

    const emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!load) {
        emptyFields.push('load')
    }
    if(!reps) {
        emptyFields.push('reps')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    try {
        const workout = await Workout.create({
            title: title,
            reps: reps,
            load: load
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//@desc: Get workouts
//@router: GET /api/workouts
//@access: Public
const getWorkouts = async(req, res) => {
    try {
        const workouts = await Workout.find()
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//@desc: Get (single) workout
//@router: GET /api/workouts
//@access: Public
const getSingleWorkout = async(req, res) => {
    const id = req.params.id
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }
    
      try {
        const workout = await Workout.findById(id)
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//@desc: Update workout
//@router: PATCH /api/workouts/
//@access: Public
const updateWorkout = async(req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
      }
    
    try {
        const workout = await Workout.findOneAndUpdate(id, {...req.body})
        
        if(!workout) {
            return res.status(400).json({msg: "Workout not found"})
        }

        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//@desc: Delete workout
//@router: DELETE /api/workouts/
//@access: Public
const deleteWorkout = async(req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

     try {
        const workout = await Workout.findByIdAndDelete(id)
        
        if(!workout) {
            return res.status(400).json({msg: "Workout not found"})
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    updateWorkout,
    deleteWorkout
}