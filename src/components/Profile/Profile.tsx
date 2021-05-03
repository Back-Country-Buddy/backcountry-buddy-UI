import React from "react"
import "./Profile.css"
import { LogoutButton } from "../Login/LogoutButton"
import { NavBar } from "../NavBar/NavBar"
import { EmergencyContact } from "./EmergencyContact"

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
  return (
    <main className="background profile-background-img">
      <div className="sub-container">
        <h1>My Account</h1>
        <img
          src={user.picture}
          alt={user.full_name}
          className="profile-photo"
        />

        <div>
          <p className="name">
            <strong>Name:</strong> {user.full_name}
          </p>
          <p className="userName">
            <strong>Username:</strong> {user.user_name}
          </p>
          <p className="email">
            <strong>Email:</strong> {user.email_address}
          </p>
        </div>

        <EmergencyContact user={user} setUser={setUser} />

        <LogoutButton />
      </div>
      <NavBar />
    </main>
  )
}
