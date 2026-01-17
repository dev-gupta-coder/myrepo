// createBrowserRouter creates a routing configuration
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import NotFound from './pages/NotFound'

// Create router object
const router = createBrowserRouter([
  {
    path: '/',                 // URL: http://localhost:5173/
    element: <Home />          // Component to render
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/user/:id',         // Dynamic route
    element: <User />
  },
  {
    path: '*',                 // 404 route (must be last)
    element: <NotFound />
  }
])

function App() {
  // RouterProvider activates routing
  return <RouterProvider router={router} />
}

export default App


// 🧠 Key Ideas
    // createBrowserRouter replaces <Routes> & <Route>
    // Routes are written as objects
    // RouterProvider starts the router

