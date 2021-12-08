import React from 'react'
import style from './AddAnimal.module.css'

export default function AddAnimal () {
  return (
    <div className = {style.container}>
      <h1> Add an animal to the database </h1>
      <div className = {style.list}>
        {
          //display all animals and a map of each animal linked with a card if it
          //if animals array is not null, then dont do the rest (in place of an if/then)
          animals && animals.map(animal => <AnimalCard animal = {animal} key = {animal.id}/>) 
        }
      </div>
    </div>
  )
}