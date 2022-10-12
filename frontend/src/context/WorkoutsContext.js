import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const WorkoutsContextProvider = ({ children }) => { //children is the App component
    //this is a react component that wraps the root of the component tree
    //so that all the component gets access to it

    const workoutsReducer = (state, action) => { //state is the previous state
        switch(action.type) {
            case 'SET_WORKOUTS':
                return {
                    workouts: action.payload
                }
            case 'CREATE_WORKOUT':
                return {
                    workouts: [action.payload, ...state.workouts]
                }
            case 'DELETE_WORKOUT':
                return {
                    workouts: state.workouts.filter((w) => w._id !== action.payload._id)
                }
            
            default:
                return state
        }
    }

    //setting the initial value of the global state and passing the reducer
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })
    return(
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}