import OktaSignIn from "@okta/okta-signin-widget"
import { useEffect } from "react"
import { navigate } from "gatsby"

const widget = new OktaSignIn({
  baseUrl: `${process.env.GATSBY_OKTA_URL}`,
  clientId: `${process.env.GATSBY_OKTA_CLIENT_ID}`,
  redirectUri: "http://localhost:8000/",
  logo: "//logo.clearbit.com/okta.com",
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
          console.log(res)
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
    .finally(() => navigate("/signin"))
}
