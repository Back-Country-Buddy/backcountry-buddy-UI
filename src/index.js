import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import './index.css'
import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react"


ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-bckux7co.us.auth0.com"
      clientId="xq75vrn6mmA5fnAI7hk1Hf39lVf6RNLG"
      redirectUri={window.location.origin}
      audience="https://dev-bckux7co.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user"
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.register()
