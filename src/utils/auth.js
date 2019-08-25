import OktaSignIn from "@okta/okta-signin-widget"
import { useEffect, useLayoutEffect, useState } from "react"
import { navigate } from "gatsby"

const widget = new OktaSignIn({
  baseUrl: `${process.env.GATSBY_OKTA_URL}`,
  clientId: `${process.env.GATSBY_OKTA_CLIENT_ID}`,
  redirectUri: "http://localhost:8000/",
  logo: null, // logo section of widget hidden in signin.css
  authParams: {
    scopes: ["openid", "profile", "email"],
  },
  features: {
    registration: true,
  },
})

export const useWidget = redirect => {
  useEffect(() => {
    widget.renderEl(
      {
        el: "#okta-widget",
      },
      res => {
        if (res.status === "SUCCESS") {
          // add ID token to tokenManager
          widget.authClient.tokenManager.add("user_id_token", res)
          navigate(redirect)
        }
      }
    )
    return () => widget.remove()
  }, [])
}

export const signOut = () => {
  widget.authClient
    .signOut()
    .catch(console.error)
    .finally(() => {
      // remove token from tokenManager
      widget.authClient.tokenManager.remove("user_id_token")
      navigate("/signin/")
    })
}

export const useAuth = () => {
  const [loading, setLoading] = useState(true)
  const [claims, setClaims] = useState(null)

  const getClaims = async () => {
    setLoading(true)
    // get token from tokenManager
    let token = await widget.authClient.tokenManager.get("user_id_token")
    // verify token is valid
    const isValid = token && (await widget.authClient.token.verify(token))
    // set claims
    if (isValid) {
      setClaims(token.claims)
    }
    setLoading(false)
  }

  useLayoutEffect(() => {
    getClaims()
  }, [])

  return { loading, claims }
}
