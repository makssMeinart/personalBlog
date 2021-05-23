import styled, { createGlobalStyle } from "styled-components"

export const lightTheme = {
  backgroundColor: "#D2D2D2",
  title: "#000",
  description: "#0D0D0D",
  time: "#828282",
  blockBg: "whitesmoke",
  headerBar: "#D2D2D2",
  sidebarTop: "#828282",
  accent: "#CC2BB2",
  inputBg: "#121212",
  userInfo: "#828282",
}

export const darkTheme = {
  backgroundColor: "#181818",
  title: "#ffffff",
  description: "#D2D2D2",
  time: "#828282",
  blockBg: "#202020",
  headerBar: "#0D0D0D",
  sidebarTop: "#272727",
  accent: "#CC2BB2",
  inputBg: "#121212",
  userInfo: "#828282",
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.headerBar};
  }
`

// Often used Container
export const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`

// Often used Inner
export const Inner = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`
