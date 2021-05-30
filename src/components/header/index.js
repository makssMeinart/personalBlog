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
import { useContext, useEffect, useState } from "react"
import { FirebaseContext } from "../../context/firebase"
import { CurrentTheme } from "../../context/themeSwitch"
import HeaderDropdown from "../headerDropdown"
import { UnlockScreen } from "../../constance/theme"
import { FaWindows } from "react-icons/fa"

export default function Header({ children, ...restProps }) {
  // The dropdown state if true then show drop down else we will remove the global styling of
  // locking the body from scrolling
  const [dropdownState, setDropdownState] = useState(true)
  const Firebase = useContext(FirebaseContext)
  const { theme, setTheme } = useContext(CurrentTheme)

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
          <Header.Theme theme={theme} onClick={() => toggleTheme()}>
            {theme === "light" ? <BsMoon /> : <RiSunFill />}
          </Header.Theme>
        </Header.Buttons>
        <Header.Burger
          dropdownState={dropdownState}
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

Header.Burger = function HeaderBurger({ ...restProps }) {
  return (
    <Burger {...restProps}>
      <div></div>
    </Burger>
  )
}
