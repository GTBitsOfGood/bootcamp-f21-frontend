import React from 'react'
import Link from 'next/link'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header>
        <div className={styles.navbar}>
          <h1> Animal Shelter </h1>
          <nav>
            <Link href="/"><a> About </a></Link>
            <Link href="/browse"><a> Browse </a></Link>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}
