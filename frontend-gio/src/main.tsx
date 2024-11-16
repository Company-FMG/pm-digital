import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import { ProfileProvider } from './contexts/ProfileContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProfileProvider>
    <App/>
    </ProfileProvider>
  </React.StrictMode>
)
