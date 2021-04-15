import React from "react"
import "./CurrentTours.css"
import CurrentTourCard from "./CurrentTourCard"

interface Tour {
  id: number
  date: string
  location: string
}

interface Props {
  currentTours: Array<Tour>
}

export const CurrentTours: React.FC<Props> = ({ currentTours }) => {
  const tours = currentTours.map((tour) => {
    return (
      <CurrentTourCard
        key={tour.id}
        date={tour.date}
        location={tour.location}
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
