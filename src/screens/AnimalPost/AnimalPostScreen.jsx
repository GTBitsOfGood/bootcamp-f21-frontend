import React from 'react'
import Image from 'next/image'

export default function AnimalPostScreen({animal}) {
  return (
    <div>
      <h1> {`${animal.name} / ${animal.species}`} </h1>
      <Image src={animal.img} width={400} height={400}/>
      <h3> {animal.location} </h3>
      <h3> {animal.description}</h3>
      <p> {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna \
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis \
            aute irure dolor in reprehenderit in voluptate velit esse \
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
             cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} </p>
    </div>
  )
}
