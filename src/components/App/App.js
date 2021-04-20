import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Route } from 'react-router-dom'

import './App.css'

import { LandingPage } from '../LandingPage/LandingPage'
import { Profile } from '../Profile/Profile'
import { TourForm } from '../Form/TourForm'
import { CurrentTours } from '../CurrentTours/CurrentTours'
import { PastTours } from '../PastTours/PastTours'
import { PastTourDetails } from '../PastTours/PastTourDetails'
import { NavBar } from '../NavBar/NavBar'

import { handleLogin, } from '../../apiRequests/userRequests'
import { secureCall } from '../../apiRequests/promiseHandling'
import { formatUser } from '../../apiRequests/dataCleaners.js'

const App = () => {
  const [userState, setUserState] = useState({
    id: '',
    user_name: '',
    email_address: '',
    emergency_contact_name: '',
    emergency_number: '',
    last_name: '',
    first_name: '',
    full_name: '',
    picture: ''
  })

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      secureCall(getAccessTokenSilently, handleLogin, user)
        .then(fetchedUser => setUserState(formatUser(user, fetchedUser.data[0])))
      }
    }, [isAuthenticated, user, getAccessTokenSilently])

  return (
    <>
    <div className='App'>
      <Route
        exact
        path='/'
        render={() => <LandingPage name={userState.name} />}
      />

      <Route
        path='/profile'
        render={() => <Profile user={userState} setUser={setUserState} />}
      />

      <Route
        exact
        path='/add-tour'
        render={() => <TourForm userId={userState.id} />}
      />

      <Route
        path='/current-tour/:userId/:tourId'
        component={TourForm}
      />

      <Route
        path='/current-tours'
        render={() => <CurrentTours userId={userState.id} />}
      />

      <Route
        exact
        path='/past-tours'
        render={() => <PastTours userId={userState.id} />}
      />

      <Route
        path='/past-tours/:userId/:tourId/:location/:date'
        component={PastTourDetails} />

    </div>
      {isAuthenticated && <NavBar />}
    </>
  )
}

export default App
