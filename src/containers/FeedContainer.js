import Header from "../components/header"
import styled from "styled-components/macro"
import { useContext } from "react"

// Context
import {ThemeContext} from "../context/themeSwitch"
import {FirebaseContext} from "../context/firebase"

// Icons
import {RiSunFill} from "react-icons/ri"
import {BsMoon} from "react-icons/bs"

// Styles
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export function FeedContainer() {
  const {setTheme, theme} = useContext(ThemeContext)
    
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  const Firebase = useContext(FirebaseContext)

  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <Header.Buttons>
          <Header.Logout onClick={() => Firebase.auth.signOut()}>
            Logout
          </Header.Logout>
          <Header.Theme onClick={toggleTheme} theme={theme}>
            {theme === "light" ? <BsMoon/> : <RiSunFill /> }
          </Header.Theme>
        </Header.Buttons>
        <Header.Searchbox>
          <Header.Search />
        </Header.Searchbox>
      </Header>
      {/* Header END */}
      <div>Feed</div>
    </Wrapper>
  )
}


