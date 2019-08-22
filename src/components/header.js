import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import Nav from "./nav"
import "./header.css"

const Header = () => (
  <header>
    <div className="header-content">
      <div className="logo">
        <Link to="/">
          <Image alt="Okta + Gatsby" />
        </Link>
      </div>
      <Nav />
    </div>
  </header>
)

export default Header
