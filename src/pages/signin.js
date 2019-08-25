import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useWidget } from "../utils/auth"
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css"
import "../components/signin.css"

const Signin = () => {
  useWidget()
  return (
    <Layout>
      <SEO title="Sign In" />
      <div id="okta-widget" />
    </Layout>
  )
}

export default Signin
