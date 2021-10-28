import React, { useState, useEffect } from 'react'
import './Queue.css'

const DISPLAY = ["Show all", "Labs only", "No labs only"]

export default function Queue() {
  const [students, setStudents] = useState([]);
  const [displayedStudents, setDisplayedStudents] = useState(students);
  const [name, setName] = useState("")
  const [isHereForLab, setIsHereForLab] = useState(false)
  const [displayOption, setDisplayOption] = useState(0)

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const labChangeHandler = () => {
    setIsHereForLab(!isHereForLab)
  }

  const submitHandler = () => {
    console.log({name: name, isHereForLab: isHereForLab})
    const newStudents = [...students]
    newStudents.push({name: name, isHereForLab: isHereForLab})
    setStudents(newStudents)
  }

  const toggleDisplayOption = () => {
    setDisplayOption((displayOption + 1) % DISPLAY.length)
  }

  useEffect(() => {
    const newStudents = students.filter(
      student => displayOption == 1 && student.isHereForLab 
                || displayOption == 2 && !student.isHereForLab 
                || displayOption == 0)
    setDisplayedStudents(newStudents)
  }, [displayOption, students.length])


  return (
    <div>
      <div>
        <p> NAME: <input type="text" onChange={nameChangeHandler}/></p>
        <p> LAB: <input type="checkbox" onChange={labChangeHandler}/></p>
        <button onClick={submitHandler}> Sign up </button>
        <button onClick={toggleDisplayOption}> {DISPLAY[displayOption]} </button>
      </div>
      {
        displayedStudents.map((student, idx) => <p key={idx} className={student.isHereForLab ? "bold" : ""}> {student.name} </p>)
      }
    </div>
  )


}
