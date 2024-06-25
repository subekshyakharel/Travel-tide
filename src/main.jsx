import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../css/style.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import Places from './Navbar/Places.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-7tjngsnilye7wy28.au.auth0.com"
    clientId="dFPgRJVKH7iyTGs8T24bgLQE1Xc9l6jN"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ><BrowserRouter>
    <App />
    <Places/>
    </BrowserRouter>
  </Auth0Provider>,
)
