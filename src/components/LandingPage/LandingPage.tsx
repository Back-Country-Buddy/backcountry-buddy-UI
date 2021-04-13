import React from 'react'
import './LandingPage.css'

interface Props {
    name: string;
}

export const LandingPage: React.FC<Props> = ({ name }) => {
  return (
    <main className="landing">
      <header className="landing-img">
        <h1 className="logo">Backcountry Buddy</h1>
        <h2>Welcome, {name}</h2>
      </header>
    </main>
  )
}
