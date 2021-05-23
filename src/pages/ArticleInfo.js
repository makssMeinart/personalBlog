import styled from "styled-components/macro"

import { useLocation } from "react-router"
import { SidebarContainer } from "../containers/SidebarContainer"
import ArticleInfoContainer from "../containers/ArticleInfoContainer"

const Wrapper = styled.div`
  display: flex;

  span {
    height: 100vh;
    background-color: pink;
  }
`

export default function ArticleInfo() {
  const location = useLocation()

  return (
    <Wrapper>
      <SidebarContainer />
      <ArticleInfoContainer location={location != undefined ? location : null} />
    </Wrapper>
  )
}
