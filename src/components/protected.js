import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { useAuth } from "../utils/auth"

const Protected = ({ children }) => {
  const { loading, claims } = useAuth()
  if (loading) return <div>Loading...</div>
  if (!claims) {
    navigate("/signin/", { replace: true })
  }
  return <>{children}</>
}

Protected.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Protected
