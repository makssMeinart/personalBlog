import Header from "../components/header"
import styled from "styled-components/macro"
import {CreateArticle} from "../components"

export function CreateArticleContainer() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.theme.backgroundColor};
  `

  return (
    <Wrapper>
      <Header />
      <CreateArticle >
      </CreateArticle>
    </Wrapper>
  )
}
