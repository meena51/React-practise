import React, { useReducer } from 'react'

function Counterreducer() {
    
    const initialState = 0
    const reducer=(state,action)=>{
        switch(action){
            case  "increment" :
                return state+1
            case "decrement" : 
                return state-1;
            default:
                return initialState
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch()}>Reset</button>
    </div>
  )
}

export default Counterreducer
