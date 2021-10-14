import React from 'react'
import RedditTextLogo from '../../reddit.svg'
import RedditImgLogo from '../../reddit_circle.svg'
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <a className="logo"> 
          <img src={RedditImgLogo} alt="Reddit Logo" className="reddit-img-logo"/>
          <img src={RedditTextLogo} alt="Reddit Logo" className="reddit-text-logo"/>
        </a>
      </div>
    </header>
  )
}
