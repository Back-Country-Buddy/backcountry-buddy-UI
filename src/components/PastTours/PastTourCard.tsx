import React from "react"
import { Link } from "react-router-dom"
import "./PastTours.css"
import { deleteTour } from "../../util.js"
import { useAuth0 } from "@auth0/auth0-react"

interface TourProps {
  userId: number
  tourId: number
  date: string
  location: string
  removeTour: (tourId:number) => any
}

export const PastTourCard: React.FC<TourProps> = ({ userId, date, location, tourId, removeTour }) => {
  const { getAccessTokenSilently } = useAuth0()

  return (
    <>
    <div className='card-wrapper'>
      <div
      className='delete-wrapper'
      onClick={()=>removeTour(tourId)}
      >X
      </div>
      <Link style={{textDecoration: 'none'}} to={`/past-tours/${userId}/${tourId}/${location}/${date}`}>
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
    </>
  )
}
