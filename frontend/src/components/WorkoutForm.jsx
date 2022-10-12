import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const {dispatch} = useWorkoutsContext()

    const handleSubmit = async (e) => {
        e.preventDefault() //to prevent the default action of the from (which is getting refreshed on submit)
        const workout = {title: title, load: load, reps: reps}
        
        const response = await fetch('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        
        if(!response.ok) {
            setError(json.error) //we have an error property
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            //setting the states to their default values
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added ', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})

        }
    }

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Create a new workout:</h3>

        <label>Exercise Title:</label>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={emptyFields.includes('title') ? 'error': ''}
        />
        
        <label>Load (in Kg):</label>
        <input
            type="number"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            className={emptyFields.includes('load') ? 'error': ''}
        />
        
        <label>Reps:</label>
        <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className={emptyFields.includes('reps') ? 'error': ''}
        />
        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm