import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 580,
        minWidth: "350px",
        padding: `1rem 2rem`,
      }}
    >
      <main>{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
