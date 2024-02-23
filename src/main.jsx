import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ShowCardProvider } from './assets/context/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShowCardProvider>
      <App />
    </ShowCardProvider>
  </React.StrictMode>,
)
