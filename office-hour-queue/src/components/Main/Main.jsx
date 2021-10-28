import React, {useState} from 'react'
import Form from '../Form/Form'
import StudentList from '../StudentList/StudentList'
import './Main.css'

export default function Main() {
  const [students, setStudents] = useState([])

  const updateStudents = (students) => {
    const newStudents = [...students]
    setStudents(newStudents)
  }

  return (
    <main>
      <Form updateStudents={updateStudents} students={students}/>
      <StudentList students={students} updateStudents={updateStudents}/>
    </main>
  )
}
