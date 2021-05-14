import Header from "../components/header"
import styled from "styled-components/macro"
import {ThemeContext} from "../context/themeSwitch"

// Icons
import {RiSunFill} from "react-icons/ri"
import { useContext } from "react"

// Styles
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export function FeedContainer() {
  const {setTheme, theme} = useContext(ThemeContext)

  console.log(setTheme,theme)
  
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <Header.Buttons>
          <Header.Logout>
            Logout
          </Header.Logout>
          <Header.Theme onClick={toggleTheme}>
            <RiSunFill />
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


