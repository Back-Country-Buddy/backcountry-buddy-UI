import React, { useState, FunctionComponent } from 'react'
import PastTourCard from './PastTourCard'
import SearchBar from './SearchBar'


interface pastTour {
  id: number,
  date: string,
  location: string,
  creator_id: number,
  complete: boolean
}

interface TourProps {
  pastTours: Array<pastTour>
}

export const PastTours: FunctionComponent<TourProps> = ({ pastTours }) => {

  console.log(pastTours)

  const createPastTourCards = () => {
    
  }

  return (
    <div>
      <SearchBar />
    </div>
  )
}
