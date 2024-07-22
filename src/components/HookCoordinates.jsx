import React, {useState,useEffect} from 'react'

function HookCoordinates() {
    const [x,setX] = useState(0)
    const [y, setY] = useState(0)
    function logMousePosition(e){
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('Mouse logged in')
        window.addEventListener('mousemove', logMousePosition)
    },  [])
  return (
    <div>
      X-{x} Y-{y}
    </div>
  )
}

export default HookCoordinates
