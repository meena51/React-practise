//useState with array
import React, { useState } from 'react'

function ItemsUS() {
    const [items,setItems] = useState([]) 
    function addItem(){
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10)+1 //Generates a random number between 1 and 10
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
      <ul>
        {
            items.map(item=>{
                return (<li key={item.id}>{item.value} </li>)
            })
        }
      </ul>
    </div>
  )
}

export default ItemsUS
