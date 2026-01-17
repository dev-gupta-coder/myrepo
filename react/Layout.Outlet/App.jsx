// createBrowserRouter creates routing configuration
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Import layout and pages
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import NotFound from './pages/NotFound'

// Router definition (TREE STRUCTURE)
const router = createBrowserRouter([
  {
    path: '/',               // Parent route
    element: <Layout />,     // Layout always visible
    children: [

      // Default page at "/"
      { index: true, element: <Home /> },

      // Child routes
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },

      // Dynamic route
      { path: 'user/:id', element: <User /> }
    ]
  },

  // 404 page (outside layout)
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  // RouterProvider activates routing
  return <RouterProvider router={router} />
}

export default App
