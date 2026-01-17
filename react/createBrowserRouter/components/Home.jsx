import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>🏠 Home Page</h1>

      {/* Link changes URL without page reload */}
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/user/42">User 42</Link>
      </nav>
    </>
  )
}

export default Home
