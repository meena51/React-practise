import React , {useReducer} from 'react'

function CounterredducerObject() {
    const initialState = {
        firstCounter : 0
    }
    const reducer=(state,action)=>{
        switch(action){
            case  "increment" :
                return {firstCounter:state.firstCounter+1}
            case "decrement" : 
                return {firstCounter:state.firstCounter-1}
            default:
                return {firstCounter:initialState.firstCounter}
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch()}>Reset</button>
    </div>
  )
}

export default CounterredducerObject
