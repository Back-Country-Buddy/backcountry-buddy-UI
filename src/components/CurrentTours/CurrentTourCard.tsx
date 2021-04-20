import React from 'react'
import './CurrentTours.css'
import { Link } from 'react-router-dom'
import { cleanDate } from '../../apiRequests/dataCleaners'

interface Props {
  date: string
  location: string
  tourId: number
  userId: number
  removeTour: (tourId:number) => any
}

const CurrentTourCard: React.FC<Props> = ({ date, location, tourId, userId, removeTour }) => {
  return (
    <div className='card-wrapper'>
      <div
        className='delete-wrapper'
        onClick={()=>removeTour(tourId)}
        >X
      </div>
      <Link style={{textDecoration: 'none'}} to={`/current-tour/${userId}/${tourId}`}>
          <article className='current-tours-card'>
            <img
              src='https://img.icons8.com/nolan/64/mountain.png'
              alt='mountains icon'
            />
            <div className='card-info'>
              <h3>{location}</h3>
              <p>{new Date(date).toDateString()}</p>
            </div>
          </article>
      </Link>
    </div>
  )
}

export default CurrentTourCard
