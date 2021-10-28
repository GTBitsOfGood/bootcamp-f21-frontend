import React from 'react'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <h1>CS 2XXX Office Hour</h1>
      { children }
    </div>
  )
}
