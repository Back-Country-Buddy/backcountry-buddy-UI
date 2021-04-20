import React from "react"
import { Link } from "react-router-dom"

import "./CurrentTours.css"

interface TourProps {
  date: string
  location: string
  tourId: number
  userId: number
  removeTour: (tourId:number) => any
}

export const CurrentTourCard: React.FC<TourProps> = ({
  date,
  location,
  tourId,
  userId,
  removeTour,
}) => {
  return (
    <div className="card-wrapper">
      <div className="delete-wrapper" onClick={() => removeTour(tourId)}>
        X
      </div>
      <Link
        style={{ textDecoration: "none" }}
        to={`/current-tour/${userId}/${tourId}`}
      >
        <article className="tour-card">
          <img
            src="https://img.icons8.com/nolan/64/mountain.png"
            alt="mountains icon"
          />
          <div className="card-info">
            <h3>{location}</h3>
            <p>{date}</p>
          </div>
        </article>
      </Link>
    </div>
  )
}
