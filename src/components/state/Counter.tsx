import { useReducer } from "react"

const initialState = { count: 0}

type CounterState = {
    count: number   
}

type UpdateAction = {
    type: "increment" | "decrement",
    payload: number
}

type ResetAction = {
    type: "reset"
}

type CounterAction = UpdateAction | ResetAction;

//This is becasue if we are resetting, it does not need a payload, so we make it optional

 function reducer(state:CounterState, action:CounterAction) {  //This is the reducer function that works with the useReducer hook  
    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload}
        case 'decrement':
            return { count: state.count - action.payload}
        case 'reset':
            return initialState;
        default:
            return state
    }
};

const Counter = () => {

    const [state,dispatch] = useReducer(reducer, initialState);
    return (
        <div style={{flex: "none"}}>
            <button onClick={() => dispatch({type: 'decrement',payload: 10})}>Decrement 10 </button>
            <button onClick={() => dispatch({type: 'increment',payload: 10})}>Increment 10</button>
            <span>Count: {state.count}</span>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button> 
        </div>
    )
  return (
    <div>Counter</div>
  )
}

export default Counter