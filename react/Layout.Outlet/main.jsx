import React from 'react'
import ReactDOM from 'react-dom/client'

// RouterProvider connects the router to React
import { RouterProvider } from 'react-router-dom'

import App from './App'

// Render React app inside index.html -> <div id="root">
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* App already contains RouterProvider */}
    <App />
  </React.StrictMode>
)
