import OktaSignIn from "@okta/okta-signin-widget"
import React, { useEffect, useLayoutEffect, useState, useContext } from "react"
import { navigate } from "gatsby"

const widget =
  typeof window !== "undefined" &&
  new OktaSignIn({
    baseUrl: `${process.env.GATSBY_OKTA_URL}`,
    clientId: `${process.env.GATSBY_OKTA_CLIENT_ID}`,
    redirectUri: `${window.location.origin}`,
    logo: null, // logo section of widget hidden in signin.css
    authParams: {
      scopes: ["openid", "profile", "email"],
    },
    features: {
      registration: true,
    },
  })

const AuthContext = React.createContext({ claims: null, setClaims: () => true })
export const AuthProvider = ({ children }) => {
  const [claims, setClaims] = useState(null)
  return (
    <AuthContext.Provider value={{ claims, setClaims }}>
      {children}
    </AuthContext.Provider>
  )
}

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

export const useAuth = () => {
  const [loading, setLoading] = useState(true)
  const { claims, setClaims } = useContext(AuthContext)

  const signOut = () => {
    widget.authClient
      .signOut()
      .catch(console.error)
      .finally(() => {
        // remove any tokens from tokenManager
        widget.authClient.tokenManager.clear()
        setClaims(null)
      })
  }

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

  return { loading, claims, signOut }
}
