// ReactDOM renders the React app into the browser
import React from 'react'
import ReactDOM from 'react-dom/client'

// BrowserRouter gives routing power to the entire app
import { BrowserRouter } from 'react-router-dom'

import App from './App'

// Attach React app to <div id="root"> in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter MUST wrap App to enable routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
