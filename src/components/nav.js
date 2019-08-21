import React from "react"
import { Link } from "gatsby"
import { signOut } from "../utils/auth"

const Nav = () => {
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
          <Link to="/signin/">Sign In</Link>
        </li>
        <li>
          <button onClick={signOut}>Sign Out</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
