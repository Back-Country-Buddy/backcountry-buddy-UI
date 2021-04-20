import React, { useState, useEffect } from 'react'
import './PastTours.css'
import { useAuth0 } from '@auth0/auth0-react'
import { PastTourCard } from './PastTourCard'
import { SearchBar } from './SearchBar'
import { getTours, deleteTour } from '../../apiRequests/tourRequests.js'
import { secureCall } from '../../apiRequests/promiseHandling.js'
import { cleanTours } from '../../apiRequests/dataCleaners.js'


interface pastTour {
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
  // eslint-disable-next-line
  const [searchResults, setSearchResults] = useState<Array<pastTour>>([])
  const [allTours, setAllTours] = useState<Array<pastTour>>([])

  const { getAccessTokenSilently } = useAuth0()

  const removeTour = (tourId:number):any => {
    const confirmationMessage = window.confirm('Are you sure you want to remove this tour?')
      if (confirmationMessage) {
        secureCall(getAccessTokenSilently, setErr, deleteTour, tourId)
          .then(() => setAllTours(allTours.filter(tour => tour.id !== tourId)))
    } else {
      return false
    }
  }

  useEffect(() => {
    secureCall(getAccessTokenSilently, setErr, getTours, userId)
      .then((tours: any) => setAllTours(cleanTours(tours, true)))
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
    <main className='past-tours'>
      <div className='background-img'>
        <h1>Past Tours</h1>
        <SearchBar filterTours={filterTours} />
        <section className='card-container'>{createPastTourCards}</section>
      </div>
    </main>
  )
}
