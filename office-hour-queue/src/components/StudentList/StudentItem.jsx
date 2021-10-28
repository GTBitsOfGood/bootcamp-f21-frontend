import React from 'react'

export default function StudentItem({student}) {
  const {name, hereForLab, gtid, inquiry} = student;
  return (
    <div>
      <p> {gtid} </p>
      <p> {name} </p>
      <p> { hereForLab ? "Lab" : ""} </p>
      <div>
        {inquiry}
      </div>
    </div>
  )
}
