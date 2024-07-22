//useReducer Function in complex state: object
import React,{useReducer} from 'react'

    //Initialising a object with property: firstCounter
    const initialState = {
        firstCounter : 0
    }
    const reducer = (state,action)=>{
        switch(action.type){
            case  "increment" :
                return {firstCounter : state.firstCounter + action.value }
            case "decrement" :
                return {firstCounter : state.firstCounter - action.value }
            case "Reset":
                return initialState
            default:
                return state
        }
    }
    function CounterReduceComplexState() {
        const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>{count.firstCounter}</h1>
      <button type='button' onClick={()=>dispatch({ type: 'increment', value:1})}>Increment</button>
      <button type='button' onClick={()=>dispatch({type:'decrement', value:1})}>Decrment</button>
      <button type='button' onClick={()=>dispatch({type:'Reset'})}>Reset</button>
      <button type='button' onClick={()=>dispatch({type:'increment', value:5 })}>Increment 5</button>
    </div>
  )
}

export default CounterReduceComplexState
