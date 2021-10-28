import React, { useState } from 'react'

export default function Queue() {
  const [students, setStudents] = useState([{name: "Luke", isHereForLab: true}]);
  const [name, setName] = useState("")
  const [isHereForLab, setIsHereForLab] = useState("")

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const labChangeHandler = () => {
    setIsHereForLab(!isHereForLab)
  }

  const submitHandler = () => {
    const newStudents = [...students]
    newStudents.push({name: name, isHereForLab: isHereForLab})
    setStudents(students)
  }

  return (
    <div>
      <div>
        <p> NAME: <input type="text" onChange={nameChangeHandler}/></p>
        <p> LAB: <input type="checkbox" onChange={labChangeHandler}/></p>
        <button onClick={submitHandler}> SUBMIT </button>
        <button> LAB DISPLAY </button>
        <button> NON LAB DISPLAY </button>
      </div>
      {
        // students.map(student => <p> {student.name} </p>)
        students.map((student, idx) => <p key={idx}> {student.name} </p>)
      }
    </div>
  )
}
