import React from "react"
import { Link } from "gatsby"
import { useAuth } from "../utils/auth"

const Nav = () => {
  const { claims, signOut } = useAuth()
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/public-page/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected-page/">Protected Page</Link>
        </li>
        <li>
          {claims ? (
            <button onClick={signOut}>Sign Out</button>
          ) : (
            <Link to="/signin/">Sign In</Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
