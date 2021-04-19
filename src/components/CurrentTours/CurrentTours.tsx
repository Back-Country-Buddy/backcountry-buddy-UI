import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

import "./CurrentTours.css"
import { CurrentTourCard } from "./CurrentTourCard"
import { getTours, deleteTour } from "../../util.js"

interface Tour {
  id: number
  date: string
  location: string
  creator_id: number
  complete: boolean
}

interface CurrentToursProps {
  tourId: number
  userId: number
}

export const CurrentTours: React.FC<CurrentToursProps> = ({ tourId, userId }) => {
  const [allTours, setAllTours] = useState<Array<Tour>>([])
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
      getTours(token, userId, false).then((tours) => {
        setAllTours(tours)
      })
    })
  }, [getAccessTokenSilently, userId])

  const tours = allTours.map((tour) => {
    return (
      <CurrentTourCard
        key={tour.id}
        date={tour.date}
        location={tour.location}
        tourId={tour.id}
        userId={userId}
        removeTour={removeTour}
      />
    )
  })

  return (
    <main className="current-tours">
      <div className="current-background-img">
        <h1>Current Tours</h1>
        <section className="card-container">{tours}</section>
      </div>
    </main>
  )
}
