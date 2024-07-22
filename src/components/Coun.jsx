import React, { useState } from 'react'

export default function Coun() {
    const [count,setCount] = useState(0)
    const handleCount = ()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>+</button>
    </div>
  )
}
