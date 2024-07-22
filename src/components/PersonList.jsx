import React from 'react'
import Person from "./Person";
function PersonList() {
  const persons=[
    {
        id:1,
        name:'Meena',
        age:21,
        skill:'react'
    },
    {
        id:2,
        name:'Vyshu',
        age:20,
        skill:'java'
    },
    {
        id:3,
        name:'Lucky',
        age:22,
        skill:'react-UI5'
    }
  ]
  const personList= persons.map(person => <Person key={person.id} person={person}/>)
  return (
    <div>
      {
        <personList/>
      }
    </div>
  )
}

export default PersonList
