import React from 'react'
// import Person from './Person'
function NameList() {
  const names = ['Meena','Vyshu','Lucky','Meena']
  // const persons=[
  //   {
  //       id:1,
  //       name:'Meena',
  //       age:21,
  //       skill:'react'
  //   },
  //   {
  //       id:2,
  //       name:'Vyshu',
  //       age:20,
  //       skill:'java'
  //   },
  //   {
  //       id:3,
  //       name:'Lucky',
  //       age:22,
  //       skill:'react-UI5'
  //   }
  // ]
  const nameList = names.map((name,index) => (
  <h1 key={index}>{name}</h1>
  ))
  return (
    <div>
        
        {nameList}
    
    </div>
  )
}

export default NameList;
