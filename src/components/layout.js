import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Nav from "./nav"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        minWidth: 280,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      <Nav />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
