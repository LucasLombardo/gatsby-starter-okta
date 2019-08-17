import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"

const Header = () => (
  <header
    style={{
      background: `#FAFBFC`,
      marginBottom: `1.45rem`,
      borderBottom: `1px solid #E1E4E8`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.4rem 1.2rem .6rem`,
      }}
    >
      <div style={{ maxWidth: 600, minWidth: 280, margin: `2rem -.5rem 1rem` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image alt="Okta + Gatsby" />
        </Link>
      </div>
    </div>
  </header>
)

export default Header
