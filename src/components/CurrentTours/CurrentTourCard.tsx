import React, { useState, useEffect} from "react"
import "./CurrentTours.css"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { secureCall } from "../../apiRequests/promiseHandling.js"
import { getUsersInTour } from "../../apiRequests/tourRequests.js"
import "./CurrentTours.css"

interface TourProps {
  date: string
  location: string
  tourId: number
  userId: number
  removeTour: (tourId: number) => any
}

export const CurrentTourCard: React.FC<TourProps> = ({
  date,
  location,
  tourId,
  userId,
  removeTour,
}) => {

const { getAccessTokenSilently } = useAuth0()
const [usersInTour, setUsersInTour] = useState<Array<any>>([])

useEffect(() => {
  secureCall(getAccessTokenSilently, getUsersInTour, tourId).then(
    (users) => setUsersInTour(users.data))
}, [getAccessTokenSilently, tourId])

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
        to={`/current-tour/${userId}/${tourId}`}
      >
        <h2 className="card-location">{location}</h2>
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
