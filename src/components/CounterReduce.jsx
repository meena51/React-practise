import React,{useReducer} from 'react'


    const initialState = 0
    const reducer = (state,action)=>{
        switch(action){
            case  "increment" :
                return state+1
            case "decrement" :
                return state-1
            case "Reset":
                return initialState
            default:
                return state
        }
    }
    function CounterReduce() {
        const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>{count}</h1>
      <button type='button' onClick={()=>dispatch('increment')}>Increment</button>
      <button type='button' onClick={()=>dispatch('decrement')}>Decrment</button>
      <button type='button' onClick={()=>dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default CounterReduce
