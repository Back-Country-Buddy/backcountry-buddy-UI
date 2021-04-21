import React from "react"
import "./CurrentTours.css"
import { Link } from "react-router-dom"

import "./CurrentTours.css"

interface TourProps {
  date: string
  location: string
  tourId: number
  userId: number
  removeTour: (tourId: number) => any
}

export const CurrentTourCard: React.FC<TourProps> = ({
  date,
  location,
  tourId,
  userId,
  removeTour,
}) => {
  return (
    <article className="tour-card">
      <img
        src="https://img.icons8.com/nolan/64/mountain.png"
        alt="mountains icon"
      />
      <Link
        style={{ textDecoration: "none" }}
        className="card-link"
        to={`/current-tour/${userId}/${tourId}`}
      >
        <h3>{location}</h3>
        <p>{new Date(date).toDateString()}</p>
      </Link>
      <button className="delete" onClick={() => removeTour(tourId)}>
        X
      </button>
    </article>
  )
}
