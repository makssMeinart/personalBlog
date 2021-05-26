import styled from "styled-components/macro"
import { AboutMe, Header } from "../components"

export default function AboutMeContainer(){
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
      <AboutMe >
        This is the ting
      </AboutMe>
    </Wrapper>
  )
}