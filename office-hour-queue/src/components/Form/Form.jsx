import React, {useState, useEffect} from 'react'
import './Form.css'

export default function Form({ updateStudents, students }) {
  const [name, setName] = useState("");
  const [gtid, setGtid] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [hereForLab, setHereForLab] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>

      <input type="text" placeholder="GTID" onChange={(e) => setGtid(e.target.value)}/>

      <textarea name="paragraph_text" 
        cols="50" rows="10" 
        placeholder="Why are you here??"
        onChange={(e) => setInquiry(e.target.value)}
        ></textarea>

      <label> Here for Lab?  <input type="checkbox" onClick={(e) => setHereForLab(e.target.value)}/> </label>

      <input type="submit" value="Submit"/>
    </form>
  )
}
