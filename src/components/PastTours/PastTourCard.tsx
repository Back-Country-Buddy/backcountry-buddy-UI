import React from "react"
import { Link } from "react-router-dom"
import "./PastTours.css"

interface TourProps {
  id: number
  date: string
  location: string
}

export const PastTourCard: React.FC<TourProps> = ({ id, date, location }) => {
  return (
    <Link to={`/tour-details/:${id}`}>
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
  )
}
