import React from 'react'
import { LoginButton } from '../Login/LoginButton'
import { useAuth0 } from "@auth0/auth0-react"
import './LandingPage.css'


export const LandingPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    <main className="landing">
      <header className="landing-img">
        <h1 className="logo">Backcountry Buddy</h1>
      {isAuthenticated ?
        <h2>Welcome, {user.given_name}</h2> :
        <LoginButton />}
      </header>
    </main>
  )
}
