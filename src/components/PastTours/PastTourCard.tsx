import React from "react"
import { Link } from "react-router-dom"
import "./PastTours.css"

interface TourProps {
  userId: number
  tourId: number
  date: string
  location: string
}

export const PastTourCard: React.FC<TourProps> = ({ userId, date, location, tourId }) => {
  return (
    <Link style={{textDecoration: 'none'}} to={`/past-tours/${userId}/${tourId}/${location}/${date}`}>
      <div className='card-wrapper'>
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
      </div>
    </Link>
  )
}
