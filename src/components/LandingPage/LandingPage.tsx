import CurrentTourCard from '../CurrentTours/CurrentTourCard'
import TourForm from '../Form/TourForm'
import PastTours from '../PastTours/PastTours'
import NavBar from '../NavBar/NavBar'
import React, { useState } from 'react'
import { tourData } from '../../PastTourData.js'


export default function LandingPage() {
  const [pastTours, setPastTours] = useState(tourData)

  return (
    <div>
      <PastTours 

      />
    </div>
  )
}
