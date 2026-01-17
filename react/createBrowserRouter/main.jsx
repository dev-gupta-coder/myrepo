import React from 'react'
import ReactDOM from 'react-dom/client'

// RouterProvider makes the router available to the app
import { RouterProvider } from 'react-router-dom'

// import App from './App.jsx'  

// Render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* App already contains RouterProvider */}
    <App />
  </React.StrictMode>
)
