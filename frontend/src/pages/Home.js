import { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Home = () => {

  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async() => {
      const response = await fetch('/api/workouts/') //the hostname is set as proxy in the package.json (frontend)
      const json = await response.json()
      
      if (response.ok) {
          dispatch({type: 'SET_WORKOUTS', payload: json}) //calling the reducer
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout) =>(
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home