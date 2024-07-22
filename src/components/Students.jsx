import React from 'react'
import StudentChild from './StudentChild'

function Students() {
    const students = [
        {
            id : 1,
            name : "vikram",
            age : 21,
            skills: "React"
        },
        {
            id : 2,
            name : "vikas",
            age : 20,
            skills: "UI5"
        },
        {
            id : 3,
            name : "Ravi",
            age : 22,
            skills: "Java"
        }
    ]
    const studentList = students.map((student)=>(
        <StudentChild student={student}/> 
    ))
  return (
    
    <div>
        {studentList}
    </div>
  )
}

export default Students
