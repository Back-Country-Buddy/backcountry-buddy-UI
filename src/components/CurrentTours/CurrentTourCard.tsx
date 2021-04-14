import React from "react"
import "./CurrentTours.css"

interface Props {
  date: string
  location: string
}

const CurrentTourCard: React.FC<Props> = ({ date, location }) => {
  return (
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
  )
}

export default CurrentTourCard
