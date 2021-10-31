import React from 'react'
import Link from 'next/link'
import style from './AnimalCard.module.css'
import Image from 'next/image'

export default function AnimalCard({animal}) {
  console.log(animal)
  return (
    <Link href={`/browse/${animal.id}`}>
      <div className={style.container}>
        <Image src={animal.img} width={200} height={200}/>
        <p> {animal.name} </p>
        <p> {animal.species} </p>
      </div>
    </Link>
  )
}
