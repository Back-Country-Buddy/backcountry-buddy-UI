import React, { useState, useEffect } from "react"
import "./PastTours.css"
import { useAuth0 } from "@auth0/auth0-react"
import { PastTourCard } from "./PastTourCard"
import { SearchBar } from "./SearchBar"
import { getTours } from "../../util.js"

interface pastTour {
  id: number
  date: string
  location: string
  creator_id: number
  complete: boolean
}

interface TourProps {
  // pastTours: Array<pastTour>
  userId: number
}

export const PastTours: React.FC<TourProps> = ({ userId }) => {
  const [searchResults, setSearchResults] = useState<Array<pastTour>>([])
  const [allTours, setAllTours] = useState<Array<pastTour>>([])

  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    getAccessTokenSilently().then(token => {
      getTours(token, userId, true).then(tours => {
        console.log(tours)
        console.log(userId)
        setAllTours(tours)
      })
    })
  }, [getAccessTokenSilently, userId])

  const createPastTourCards = allTours.map((tour) => {
    console.log(tour)
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
    const filteredTours = allTours.filter((tour) => {
      return tour.location.includes(input)
    })

    setSearchResults([...filteredTours])
  }

  return (
    <main className="past-tours">
      <div className="background-img">
        <h1>Past Tours</h1>
        <SearchBar filterTours={filterTours} />
        <section className="card-container">{createPastTourCards}</section>
      </div>
    </main>
  )
}
