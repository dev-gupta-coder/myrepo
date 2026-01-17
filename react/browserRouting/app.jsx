// Import routing components
import { Routes, Route, Link } from 'react-router-dom'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      {/* Navigation links (NO page reload) */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/user/101">User 101</Link>
      </nav>

      <hr />

      {/* Routes = container for all routes */}
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Home />} />

        {/* Normal routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic route with parameter */}
        <Route path="/user/:id" element={<User />} />

        {/* 404 page (must be last) */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App
