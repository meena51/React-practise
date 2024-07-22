import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    function Increment(){
        setCount(prevCount => prevCount+1)
    }
    function Decrement(){
        setCount(prevCount => prevCount-1)
    }
    function incrementFive(){
        for (let i=0; i<5; i++){
            setCount(prevCount => prevCount+1)
        }
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={incrementFive}>IncrementFive</button>
    </div>
  )
}

export default HookCounter
