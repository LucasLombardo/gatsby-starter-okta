import React from "react"
import { useWidget } from "../utils/auth"
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css"

const Signin = () => {
  useWidget()
  return <div id="okta-widget" />
}

export default Signin
