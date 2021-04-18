import React from "react"
import "./CurrentTours.css"
import { Link } from "react-router-dom"

interface Props {
  date: string
  location: string
  tourId: number
  userId: number
}

const CurrentTourCard: React.FC<Props> = ({ date, location, tourId, userId }) => {
  return (
    <Link style={{textDecoration: 'none'}} to={`/current-tour/${userId}/${tourId}`}>
      <div className='card-wrapper'>
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

export default CurrentTourCard
