import React, { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { addUser } from '../../util.js'

import { LoginButton } from "../Login/LoginButton"

import "./LandingPage.css"

export const LandingPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth0()

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     addUser(user.name, user.email, 'Humpty Dumpty', '666-666-6666', user.sub)
  //   }
  // }, [isAuthenticated])

  return (
    <main className="landing">
      <header className="landing-img">
        <h1 className="logo">Backcountry Buddy</h1>

        {isAuthenticated && user.given_name && (
          <h2 className="welcome">Welcome, {user.given_name}</h2>
        )}

        {isAuthenticated && !user.given_name && (
          <h2 className="welcome">Welcome, friend!</h2>
        )}

        {!isAuthenticated && <LoginButton />}
      </header>
    </main>
  )
}
