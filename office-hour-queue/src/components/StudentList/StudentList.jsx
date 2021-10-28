import React from 'react'
import './StudentList.css'
import StudentItem from './StudentItem'

export default function StudentList({ students }) {
  return (
    <div className="student-list">
      {
        students.map(student => <StudentItem student={student}/>)
      }
    </div>
  )
}
