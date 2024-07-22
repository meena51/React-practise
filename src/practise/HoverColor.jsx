import React, { useState } from 'react'

function HoverColor() {
    const [ishovered,setIshovered] = useState(false)
    const style = {
        backgroundColor : ishovered? 'red' : 'blue',
        width : '1500px'
    }
    

  return (
    <div>
      <div style={style} onMouseEnter={()=>{setIshovered(true)}} onMouseLeave={()=>setIshovered(false)}>Hi</div>
    </div>
  )
}

export default HoverColor
