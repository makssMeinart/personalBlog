import { Redirect, Route } from "react-router"
import * as ROUTES from "../constance/routePath"

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          )
        }

        return null
      }}
    />
  )
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (user) {
          return children
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.SIGNIN,
              }}
            />
          )
        }

        return null
      }}
    />
  )
}
