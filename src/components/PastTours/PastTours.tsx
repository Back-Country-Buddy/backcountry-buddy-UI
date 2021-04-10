import React, { useState, FunctionComponent } from 'react'
import { PastTourCard } from './PastTourCard'
import { SearchBar } from './SearchBar'
import './PastTours.css'

interface pastTour {
  id: number;
  date: string;
  location: string;
  creator_id: number;
  complete: boolean;
}

interface TourProps {
  pastTours: Array<pastTour>
}


export const PastTours: React.FC<TourProps> = ({ pastTours }) => {
  const createPastTourCards = pastTours.map(tour => {
      return (
      <PastTourCard  
        key={tour.id}
        date={tour.date}
        location={tour.location}
      />
    )  
  })

  const filterTours = (input: string) => {
   return pastTours.filter(tour => {
      return tour.location.includes(input)
  })

  }

  return (
    <section className='past-tours'>
      <h1>Past Tours</h1>
      <SearchBar filterTours={filterTours}/>
      {createPastTourCards}
    </section>
  )
}
