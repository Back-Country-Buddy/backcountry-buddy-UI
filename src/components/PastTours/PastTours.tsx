import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import "./PastTours.css"

import { getTours, deleteTour } from "../../util.js"
import { PastTourCard } from "./PastTourCard"
import { SearchBar } from "./SearchBar"
import { NavBar } from "../NavBar/NavBar"

interface PastTour {
  id: number
  date: string
  location: string
  creator_id: number
  complete: boolean
}

interface TourProps {
  tourId: number
  userId: number
}

export const PastTours: React.FC<TourProps> = ({ tourId, userId }) => {
  // eslint-disable-next-line
  const [searchResults, setSearchResults] = useState<Array<PastTour>>([])
  const [allTours, setAllTours] = useState<Array<PastTour>>([])

  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    getAccessTokenSilently().then((token) => {
      getTours(token, userId, true).then((tours) => {
        setAllTours(tours)
      })
    })
  }, [getAccessTokenSilently, userId])

  const filterTours = (input: string): any => {
    const filteredTours = allTours.filter((tour) => {
      return tour.location.includes(input)
    })
    setSearchResults([...filteredTours])
  }

  const removeTour = (tourId: number): any => {
    const confirmationMessage = window.confirm(
      "Are you sure you want to remove this tour?"
    )
    if (confirmationMessage) {
      getAccessTokenSilently().then((token) => {
        deleteTour(token, tourId).then(() => {
          const newTours = allTours.filter((tour) => tour.id !== tourId)
          setAllTours(newTours)
        })
      })
    } else {
      return false
    }
  }

  const createPastTourCards = allTours.map((tour) => {
    return (
      <PastTourCard
        key={tour.id}
        tourId={tour.id}
        date={tour.date}
        location={tour.location}
        userId={userId}
        removeTour={removeTour}
      />
    )
  })

  return (
    <main className="background-img past-background-img">
      <div className="sub-container">
        <h1>Past Tours</h1>
        <SearchBar filterTours={filterTours} />
        <section className="card-container">{createPastTourCards}</section>
      </div>
      <NavBar />
    </main>
  )
}
