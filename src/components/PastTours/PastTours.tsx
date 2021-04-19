import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

import "./PastTours.css"

import { PastTourCard } from "./PastTourCard"
import { SearchBar } from "./SearchBar"
import { getTours, deleteTour } from "../../util.js"

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

  const removeTour = (tourId:number):any => {
    const confirmationMessage = window.confirm('Are you sure you want to remove this tour?')
      if (confirmationMessage) {
        getAccessTokenSilently().then(token => {
          deleteTour(token, tourId).then(() => {
            const newTours = allTours.filter(tour => tour.id !== tourId)
            setAllTours(newTours)
          })
        })
    } else {
      return false
    }
  }

  useEffect(() => {
    getAccessTokenSilently().then((token) => {
      getTours(token, userId, true).then((tours) => {
        setAllTours(tours)
      })
    })
  }, [getAccessTokenSilently, userId])

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
