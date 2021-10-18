import React from 'react'
import './TodoItem.css'

export default function TodoItem(props) {
  const { title, dueDate, completed } = props;
  return (
    <div className="todo">
        <p className="title"> {title} </p>
        <p className="due-date"> {dueDate} </p>
    </div>
  )
}
