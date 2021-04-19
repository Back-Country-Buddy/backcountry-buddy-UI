import React from "react"
import "./Profile.css"
import { useAuth0 } from "@auth0/auth0-react"
import { updateUser } from "../../apiRequests/userRequests.js"
import { LogoutButton } from "../Login/LogoutButton"

interface ProfileProps {
  user: {
    id: string
    user_name: string
    email_address: string
    emergency_contact_name: string
    emergency_number: string
    last_name: string
    first_name: string
    full_name: string
    picture: string
  }
  setUser: React.Dispatch<React.SetStateAction<any>>
}

export const Profile: React.FC<ProfileProps> = ({ user, setUser }) => {
  const { getAccessTokenSilently } = useAuth0()

  const submitInfo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    getAccessTokenSilently().then((token) => {
      updateUser(token, user.id, {
        emergency_contact_name: user.emergency_contact_name,
        emergency_number: user.emergency_number,
      })
    })
  }

  return (
    <main>
      <div className="profile-background-img">
        <h1>My Account</h1>
        <img src={user.picture} alt={user.full_name} className="profile-photo" />
        <div className="profile">
          <p className="name">Name: {user.first_name}</p>
          <p className="email">Email: {user.email_address}</p>
          <p className="userName">Username: {user.user_name}</p>
          <h3>Emergency Contact:</h3>
          <form className="emergency-form">
            <div className="emergency-form-section">
              <label htmlFor="emergencyName" className="emergency-label">
                NAME
              </label>
              <input
                type="text"
                name="emergencyName"
                value={user.emergency_contact_name}
                onChange={(e) =>
                  setUser({
                    ...user,
                    emergency_contact_name: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="phone" className="emergency-label">
                PHONE
              </label>
              <input
                type="text"
                name="phone"
                value={user.emergency_number}
                onChange={(e) =>
                  setUser({
                    ...user,
                    emergency_number: e.target.value,
                  })
                }
              />
            </div>
            <button onClick={(e) => submitInfo(e)}>SAVE</button>
          </form>
        </div>
        <LogoutButton />
      </div>
    </main>
  )
}
