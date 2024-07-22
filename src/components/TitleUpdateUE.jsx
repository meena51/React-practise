//TitleUpdate file using UseEffect
import React, {useEffect, useState}from 'react'

function TitleUpdateUE() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title=`Clicked ${count} times`
    })
    
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default TitleUpdateUE
