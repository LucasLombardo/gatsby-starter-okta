import React from "react"
import { Link } from "gatsby"

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
      </ul>
    </nav>
  )
}

export default Nav
