import React, { useState, useEffect } from "react"
import "./PastTours.css"
import { useAuth0 } from "@auth0/auth0-react"

import { PastTourCard } from "./PastTourCard"
import { SearchBar } from "./SearchBar"
import { NavBar } from "../NavBar/NavBar"

import { getTours, deleteTour } from "../../apiRequests/tourRequests.js"
import { secureCall } from "../../apiRequests/promiseHandling.js"
import { cleanTours } from "../../apiRequests/dataCleaners.js"

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
  setErr: () => any
}

export const PastTours: React.FC<TourProps> = ({ tourId, userId, setErr }) => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [allTours, setAllTours] = useState<Array<PastTour>>([])

  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    secureCall(getAccessTokenSilently, setErr, getTours, userId).then(
      (tours: any) => {
        setAllTours(cleanTours(tours, true))
      }
    )
  }, [getAccessTokenSilently, userId, setErr])

  const removeTour = (tourId: number): any => {
    const confirmationMessage = window.confirm(
      "Are you sure you want to remove this tour?"
    )
    if (confirmationMessage) {
      secureCall(getAccessTokenSilently, setErr, deleteTour, tourId).then(() =>
        setAllTours(allTours.filter((tour) => tour.id !== tourId))
      )
    } else {
      return false
    }
  }

  const renderPastTourCards = () => {
    return allTours
      .filter((tour) => {
        return tour.location.toLowerCase().includes(searchQuery.toLowerCase())
      })
      .map((tour) => {
        return (
          <PastTourCard
            key={tour.id}
            tourId={tour.id}
            date={tour.date}
            location={tour.location}
            userId={userId}
            removeTour={removeTour}
            setErr={setErr}
          />
        )
      })
  }

  return (
    <main className="background past-background-img">
      <div className="sub-container">
        <h1>Past Tours</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <section className="card-container">{renderPastTourCards()}</section>
      </div>
      <NavBar />
    </main>
  )
}
