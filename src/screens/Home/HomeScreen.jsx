import React from 'react'
import Image from 'next/image'
import styles from './HomeScreen.module.css'

export default function HomeScreen() {
  return (
    <div>
      <h1 className={styles.title}> Adib's Animal Shelter </h1>
      <div className={styles.about}>
        <div className={styles.imageContainer}>
          <Image src="/image/adib2.jpg" layout={'fill'} objectFit={'contain'}/>
        </div>
        <div>
          <h3> Hi! I'm Adib! I like rescuing animals! </h3>
          <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
      </div>
    </div>
  )
}
