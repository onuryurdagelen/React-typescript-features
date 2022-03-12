import { useReducer } from 'react'

enum CounterActions{
    INCREMENT,
    DECREMENT,
    RESET
}

type CounterState = {
  count: number
 
}

type UpdateAction = {
  type: CounterActions.INCREMENT | CounterActions.DECREMENT
  payload: number
}

type ResetAction = {
  type: CounterActions.RESET
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return { count: state.count + action.payload }
    case CounterActions.DECREMENT:
      return { count: state.count - action.payload }
    case CounterActions.RESET:
      return initialState
    default:
      return state
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: CounterActions.INCREMENT, payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type:CounterActions.DECREMENT, payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: CounterActions.RESET})}>Reset</button>
    </>
  )
}