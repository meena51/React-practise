import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1> Iam {person.name} My age is {person.age} and my skill is {person.skill} </h1>
    </div>
  )
}

export default Person
