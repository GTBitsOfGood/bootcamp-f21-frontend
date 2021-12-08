import React from 'react'
import style from './AnimalPostScreen.module.css'
import Image from 'next/image'

export default function AnimalPostScreen({ animals }) {
    return (
        <div className = {style.container}>
            <h1>{animals.name} / {animals.species} </h1>
            <Image src={animals.img} width={200} height ={200} />
            <h3>{animals.location}</h3>
            <h3>{animals.description}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    )
};