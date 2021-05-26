import styled from "styled-components/macro"
import MyWorkContainer from "../containers/MyWorkContainer"
import { SidebarContainer } from "../containers/SidebarContainer"

export default function MyWork() {
  const Wrapper = styled.div`
    display: flex;
  `

  return (
    <Wrapper>
      <SidebarContainer />
      <MyWorkContainer />
    </Wrapper>
  )
}
