import { CurrentTours } from '../CurrentTours/CurrentTours'
import TourForm from '../Form/TourForm'
import PastTours from '../PastTours/PastTours'
import NavBar from '../NavBar/NavBar'

import React from 'react'
import './LandingPage.css'

interface Props {
    name: string;
}

export const LandingPage: React.FC<Props> = ({ name }) => {
  return (
    <main className="landing">
      <section className="landing-img">
        <h1 className="logo">Backcountry Buddy</h1>
        <h2>Welcome, {name}</h2>
      </section>
      <p>navbar placeholder</p>
    </main>
  )
}
