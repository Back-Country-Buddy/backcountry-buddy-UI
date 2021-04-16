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
      audience="https://dev-bckux7co.us.auth0.com/api/v2/"
      // scope="read:current_user update:current_user"
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// if (navigator.serviceWorker) {
//     navigator.serviceWorker.register('../../sw.js')
//         .then((registration) => {
//             console.log('SW Registered', registration);
//         });
// }

// if (window.Cypress) {
//     serviceWorkerRegistration.unregister();
// } else {
//     serviceWorkerRegistration.register();
// }

// self.addEventListener('activate', (e) => {
//   let cacheCleaned = caches.keys()
//     .then(keys => {
//       keys.forEach(key => {
//         if (key !== pwaCache) {
//           return caches.delete(key)
//         }
//       })
//     })
//   e.waitUntil(cacheCleaned)
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
