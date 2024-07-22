import React, {useState, useEffect, useRef} from 'react'

function TimerRef() {
    const [count , setCount] = useState(0)
    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current = setInterval(()=>{
            setCount(prevCount=>prevCount+1)
        },1000)
        return ()=>{
            clearInterval(inputRef.current)
        }
    }
 ,[])
  return (
    <div>
      {count}
    </div>
  )
}

export default TimerRef
