import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={props.handlemsg}>Submit</button>
    </div>
  )
}

export default Child
