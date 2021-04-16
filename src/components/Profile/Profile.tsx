import React from "react"
import "./Profile.css"
import { useAuth0 } from "@auth0/auth0-react"
import { updateUser } from "../../util"
import { LogoutButton } from "../Login/LogoutButton"

interface ProfileProps {
  user: {
    given_name: string
    family_name: string
    nickname: string
    name: string
    picture: string
    locale: string
    updated_at: string
    email: string
    email_verified: string
    sub: string
    emergency_contact_name: string
    emergency_number: string
  }
  setUser: React.Dispatch<React.SetStateAction<any>>
}

export const Profile: React.FC<ProfileProps> = ({ user, setUser }) => {
  const { getAccessTokenSilently } = useAuth0()

  const submitInfo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    getAccessTokenSilently().then((token) => {
      updateUser(token, 2, {
        emergency_contact_name: user.emergency_contact_name,
        emergency_number: user.emergency_number,
      })
    })
  }

  return (
    <main>
      <div className="profile-background-img">
        <h1>My Account</h1>
        <img src={user.picture} alt={user.name} className="profile-photo" />
        <div className="profile">
          <p className="name">Name: {user.name}</p>
          <p className="email">Email: {user.email}</p>
          <p className="userName">Username: {user.nickname}</p>
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
