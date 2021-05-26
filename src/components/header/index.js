import {
  Container,
  Inner,
  Buttons,
  Logout,
  Theme,
  Searchbox,
  Search,
  Burger,
} from "./styles/header"
// Icons
import { RiSunFill } from "react-icons/ri"
import { BsMoon } from "react-icons/bs"
import { useContext, useState } from "react"
import { FirebaseContext } from "../../context/firebase"
import { ThemeContext } from "../../context/themeSwitch"
import HeaderDropdown from "../headerDropdown"
import { UnlockScreen } from "../../constance/theme"

export default function Header({ children, ...restProps }) {
  const { setTheme, theme } = useContext(ThemeContext)
  // The dropdown state if true then show drop down else we will remove the global styling of
  // locking the body from scrolling
  const [dropdownState, setDropdownState] = useState(true)
  const Firebase = useContext(FirebaseContext)

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <Container>
      <Inner>
        <Header.Buttons>
          <Header.Logout onClick={() => Firebase.auth.signOut()}>
            Logout
          </Header.Logout>
          <Header.Theme onClick={toggleTheme} theme={theme}>
            {theme === "light" ? <BsMoon /> : <RiSunFill />}
          </Header.Theme>
        </Header.Buttons>
        <Header.Searchbox>
          <Header.Search />
        </Header.Searchbox>
        <Header.Burger
          onClick={() => setDropdownState((dropdownState) => !dropdownState)}
        />
      </Inner>
      <HeaderDropdown dropdownState={dropdownState} />
    </Container>
  )
}

Header.Buttons = function HeaderButtons({ children, ...restProps }) {
  return <Buttons>{children}</Buttons>
}

Header.Inner = function HeaderInner({ children, ...restProps }) {
  return <Inner>{children}</Inner>
}

Header.Logout = function HeaderLogout({ children, ...restProps }) {
  return <Logout {...restProps}>{children}</Logout>
}

Header.Theme = function HeaderTheme({ children, ...restProps }) {
  return <Theme {...restProps}>{children}</Theme>
}

Header.Searchbox = function HeaderSearchbox({ children, ...restProps }) {
  return <Searchbox>{children}</Searchbox>
}

Header.Search = function HeaderSearch({ children, ...restProps }) {
  return <Search placeholder="Search the blog">{children}</Search>
}

Header.Burger = function HeaderBurger({ ...restProps }) {
  return (
    <Burger {...restProps}>
      <div></div>
    </Burger>
  )
}
