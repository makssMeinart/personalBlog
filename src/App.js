import { Signin, Feed, CreateArticle, AboutMe } from "./pages"
import {CurrentTheme} from "./context/themeSwitch"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./constance/theme"
import { BrowserRouter as Router, Route } from "react-router-dom"
import * as ROUTES from "./constance/routePath"
// Helpers
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"
import { useAuthListener } from "./hooks"
import ArticleInfo from "./pages/ArticleInfo"
import MyWork from "./pages/MyWork"
import { useEffect, useState } from "react"

export default function App() {
  const { user } = useAuthListener()
  const [theme, setTheme] = useState("dark")

  return (
    // ThemeProvider will toggle the dark/light mode
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CurrentTheme.Provider value={{theme,setTheme}} >
        {/* Theme Switch */}
        <Router>
          {/* Login */}
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.FEED}
            path={"/"}
            exact
          >
            <Signin />
          </IsUserRedirect>
          {/* Feed */}
          <ProtectedRoute user={user} path={ROUTES.FEED}>
            <Feed />
          </ProtectedRoute>
          <ProtectedRoute user={user} path={ROUTES.CREATEARTICLE}>
            <CreateArticle />
          </ProtectedRoute>
          <ProtectedRoute user={user} path={"/article/:id"}>
            <ArticleInfo />
          </ProtectedRoute>
          <ProtectedRoute user={user} path={ROUTES.MYWORK}>
            <MyWork />
          </ProtectedRoute>
          <ProtectedRoute user={user} path={ROUTES.ABOUTME}>
            <AboutMe />
          </ProtectedRoute>
        </Router>
      </CurrentTheme.Provider>
    </ThemeProvider>
  )
}
