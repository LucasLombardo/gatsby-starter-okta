import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Protected from "../components/protected"

const SecondPage = () => (
  <Layout>
    <SEO title="Protected Page" />
    <Protected>
      <h1>Protected Page</h1>
      <p>This is a protected area of the site.</p>
      <p>
        If an unauthenticated user attempts to access this page, they will be
        redirected to the signin page before anything inside of the
        <code style={{ margin: "0.2rem" }}>Protected</code>
        component is rendered.
      </p>
      <p>
        While markup on this page will not be visible to regular users, it will
        still be discoverable in your static assets. Be sure to keep any
        sensitive data on your resource server.
      </p>
    </Protected>
  </Layout>
)

export default SecondPage
