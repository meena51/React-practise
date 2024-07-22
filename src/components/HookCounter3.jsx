import React, {useState} from 'react'

function HookCounter3() {
    const [name,setName] = useState({firstName:' ', lastname:' '})
    function handleFirst(event){
        setName({firstName: event.target.value})
    }
    function handleLast(event){

        setName({lastname: event.target.value})
    }

  return (
    <div>
        <h1>Hello</h1>
      <form>
        <h1>{name}</h1>
        <label htmlFor="">Firstname</label>
        <input type="text" onChange={handleFirst} value={name.firstName}/>
        
        <label htmlFor="">LastName</label>
        <input type="text" onChange={handleLast} value={name.lastname}/>
      </form>
    </div>
  )
}

export default HookCounter3
