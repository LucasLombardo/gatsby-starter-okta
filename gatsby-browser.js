import React from "react"
import PropTypes from "prop-types"
import { AuthProvider } from "./src/utils/auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
