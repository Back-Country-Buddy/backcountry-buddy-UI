import React from "react"
import { Link } from "react-router-dom"
import "./PastTours.css"

interface TourProps {
  userId: number
  tourId: number
  date: string
  location: string
  removeTour: (tourId: number) => any
}

export const PastTourCard: React.FC<TourProps> = ({
  userId,
  date,
  location,
  tourId,
  removeTour,
}) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/past-tours/${userId}/${tourId}/${location}/${date}`}
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
        <button className="delete" onClick={() => removeTour(tourId)}>
          X
        </button>
      </article>
    </Link>
  )
}
