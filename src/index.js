import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react"


ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-bckux7co.us.auth0.com"
      clientId="xq75vrn6mmA5fnAI7hk1Hf39lVf6RNLG"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
