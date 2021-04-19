import React from "react"
import { Link } from "react-router-dom"

import "./CurrentTours.css"

interface TourProps {
  date: string
  location: string
  tourId: number
  userId: number
}

export const CurrentTourCard: React.FC<TourProps> = ({
  date,
  location,
  tourId,
  userId,
}) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/current-tour/${userId}/${tourId}`}
    >
      <div className="card-wrapper">
        <article className="current-tours-card">
          <img
            src="https://img.icons8.com/nolan/64/mountain.png"
            alt="mountains icon"
          />
          <div className="card-info">
            <h3>{location}</h3>
            <p>{date}</p>
          </div>
        </article>
      </div>
    </Link>
  )
}
