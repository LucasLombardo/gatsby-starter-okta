import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useAuth } from "../utils/auth"

const SecondPage = () => {
  const { loading, claims } = useAuth()
  return (
    <Layout>
      <SEO title="Public Page" />
      <h1>Public Page</h1>
      <p>This is a public area of the site.</p>
      <p>
        Anyone can access this content. You can still use information from user
        claims on public pages.
      </p>
      <p>
        <strong>Current status:</strong>{" "}
        {claims ? <>Logged in as {claims.name}</> : <>Not logged in.</>}
      </p>
    </Layout>
  )
}

export default SecondPage
