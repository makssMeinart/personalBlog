import { Signin, Feed } from "./pages"
import { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./constance/theme"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeContext } from "./context/themeSwitch"

export default function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    // ThemeProvider will toggle the dark/light mode
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {/* Theme Switch */}
      <ThemeContext.Provider value={{theme, setTheme}}>
        {/* Router */}
        <Router>
          <Route path={"/signin"}>
            <Signin />
          </Route>
          <Route path={"/feed"}>
            <Feed />
          </Route>
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
