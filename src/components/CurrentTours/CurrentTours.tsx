import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import "./CurrentTours.css"
import CurrentTourCard from "./CurrentTourCard"
import { getTours } from "../../util.js"

interface Tour {
  id: number
  date: string
  location: string
  creator_id: number
  completed: boolean
}

interface CurrentToursProps {
  userId: number
}

export const CurrentTours: React.FC<CurrentToursProps> = ({ userId }) => {
  const [currentTours, setCurrentTours] = useState<Array<Tour>>([])
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    getAccessTokenSilently().then(token => {
      getTours(token, userId).then(tours => {
        setCurrentTours(tours)
      })
    })
  }, [getAccessTokenSilently, userId])

  const tours = currentTours.map((tour) => {
    return (
      <CurrentTourCard
        key={tour.id}
        date={tour.date}
        location={tour.location}
        tourId={tour.id}
        userId={userId}
      />
    )
  })

  return (
    <main className="current-tours">
    <div className='current-background-img'>
      <h1>Current Tours</h1>
      <section className='card-container'>
        {tours}
      </section>
    </div>
    </main>
  )
}
