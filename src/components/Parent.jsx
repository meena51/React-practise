import React from 'react'
import { useState } from 'react'
import Child from './Child';

export default function Parent() {
    const [parent,setParent] = useState('Meena');
    const handlemsg = ()=>{
        alert(`Hello ${parent}`)
    }
  return (
    <div>
      <Child handlemsg={handlemsg}/>
    </div>
  )
}

