import styled from "styled-components"
import AboutMeContainer from "../containers/AboutMeContainer"
import { SidebarContainer } from "../containers/SidebarContainer"

export default function AboutMe() {
  const Wrapper = styled.div`
    display: flex;
  `
  
  return (
    <Wrapper>
     <SidebarContainer />
     <AboutMeContainer />
    </Wrapper>
  )
}