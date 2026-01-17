import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      {/* Common UI (Navbar / Header) */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/user/10">User 10</Link>
      </nav>

      <hr />

      {/* Outlet renders the matched CHILD route */}
      <Outlet />
    </>
  )
}

export default Layout
