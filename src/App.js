import { Signin, Feed, CreateArticle, AboutMe } from "./pages"
import { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./constance/theme"
import { BrowserRouter as Router, Route } from "react-router-dom"
import * as ROUTES from "./constance/routePath"
import { ThemeContext } from "./context/themeSwitch"
// Helpers
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"
import { useAuthListener } from "./hooks"
import ArticleInfo from "./pages/ArticleInfo"
import MyWork from "./pages/MyWork"

export default function App() {
  const [theme, setTheme] = useState("dark")
  const { user } = useAuthListener()

  return (
    // ThemeProvider will toggle the dark/light mode
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {/* Theme Switch */}
      <ThemeContext.Provider value={{ theme, setTheme}}>
        {/* Router */}
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
          <ProtectedRoute user={user} path={"/article/:id"} >
            <ArticleInfo/>
          </ProtectedRoute>
          <ProtectedRoute user={user} path={ROUTES.MYWORK} >
            <MyWork />
          </ProtectedRoute>
          <ProtectedRoute user={user} path={ROUTES.ABOUTME} >
            <AboutMe />
          </ProtectedRoute>
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
