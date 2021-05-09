import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { secureCall } from "../../apiRequests/promiseHandling.js"
import { getUsersInTour } from "../../apiRequests/tourRequests.js"
import "./PastTours.css"

interface TourProps {
  userId: number
  tourId: number
  date: string
  location: string
  removeTour: (tourId: number) => any
  setErr: () => any
}

export const PastTourCard: React.FC<TourProps> = ({
  userId,
  date,
  location,
  tourId,
  removeTour,
  setErr
}) => {

  const { getAccessTokenSilently } = useAuth0()
  const [usersInTour, setUsersInTour] = useState<Array<any>>([])

  useEffect(() => {
    secureCall(getAccessTokenSilently, getUsersInTour, tourId).then(
      (users) => setUsersInTour(users.data))
  }, [getAccessTokenSilently, setErr, tourId])

  return (
    <article className="tour-card">
      <img
        src="https://img.icons8.com/nolan/64/mountain.png"
        alt="mountains icon"
        className="card-icon"
      />
      <Link
        style={{ textDecoration: "none" }}
        className="card-link"
        to={`/past-tours/${userId}/${tourId}/${location}/${date}`}
      >
        <h3 className="card-location">{location}</h3>
        <p>{new Date(date).toDateString()}</p>
        {usersInTour[0] && (
          <p style={{fontSize: ".7em"}}>Created By: {usersInTour[0].attributes.user_name}</p>
        )}
      </Link>
      <button className="delete" onClick={() => removeTour(tourId)}>
        X
      </button>
    </article>
  )
}
