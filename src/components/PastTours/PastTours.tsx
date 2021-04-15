import React, { useState } from "react"
import "./PastTours.css"

import { PastTourCard } from "./PastTourCard"
import { SearchBar } from "./SearchBar"

interface pastTour {
  id: number
  date: string
  location: string
  creator_id: number
  complete: boolean
}

interface TourProps {
  pastTours: Array<pastTour>
}

export const PastTours: React.FC<TourProps> = ({ pastTours }) => {
  const [searchResults, setSearchResults] = useState<pastTour[]>(pastTours)

  const createPastTourCards = searchResults.map((tour) => {
    return (
      <PastTourCard
        key={tour.id}
        id={tour.id}
        date={tour.date}
        location={tour.location}
      />
    )
  })

  const filterTours = (input: string): any => {
    const filteredTours = pastTours.filter((tour) => {
      return tour.location.includes(input)
    })

    setSearchResults([...filteredTours])
  }

  return (
    <main className="past-tours">
    <div className='background-img'>
      <h1>Past Tours</h1>
      <SearchBar filterTours={filterTours} />
      <section className="card-container">
        {createPastTourCards}
      </section>
    </div>
    </main>
  )
}
