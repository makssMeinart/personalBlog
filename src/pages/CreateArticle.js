import { SidebarContainer } from "../containers/SidebarContainer"
import styled from "styled-components/macro"
import { CreateArticleContainer } from "../containers/CreateArticleContainer"

export default function CreateArticle() {
  // Seperates sidebar and content
  const Wrapper = styled.div`
    display: flex;
  `

  return (
    <Wrapper>
      <SidebarContainer />
      <CreateArticleContainer />
    </Wrapper>
  )
}
