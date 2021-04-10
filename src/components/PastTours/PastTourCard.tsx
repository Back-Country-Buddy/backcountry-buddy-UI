import React from 'react'
import PastTourDetails from './PastTourDetails'
import './PastTours.css'

interface TourProps {
  date: string;
  location: string;
}

export const PastTourCard: React.FC<TourProps> = ({ date, location }) => {
  return (
    <article className='tour-card'>
      <img src="https://img.icons8.com/nolan/64/mountain.png" alt="mountains icon"/>
      <div className='card-info'>
        <h3>{location}</h3>
        <p>{date}</p>
      </div>
    </article>
  )
}
