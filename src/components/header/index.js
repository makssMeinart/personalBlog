import {Container, Inner, Buttons, Logout, Theme, Searchbox, Search} from "./styles/header"

export default function Header({children, ...restProps}) {
  return (
    <Container>
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}

Header.Buttons = function HeaderButtons({children, ...restProps}) {
  return <Buttons >{children}</Buttons>
}

Header.Inner = function HeaderInner({children, ...restProps}) {
  return <Inner >{children}</Inner>
}

Header.Logout = function HeaderLogout({children, ...restProps}) {
  return <Logout {...restProps} >{children}</Logout>
}

Header.Theme = function HeaderTheme({children, ...restProps}) {
  return <Theme {...restProps} >{children}</Theme>
}

Header.Searchbox = function HeaderSearchbox({children, ...restProps}) {
  return <Searchbox >{children}</Searchbox>
}

Header.Search = function HeaderSearch({children, ...restProps}) {
  return <Search placeholder="Search the blog" >{children}</Search>
}