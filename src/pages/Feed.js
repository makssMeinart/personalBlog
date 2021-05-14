import styled from "styled-components"
import Sidebar from "../components/sidebar"
import { FeedContainer } from "../containers/FeedContainer"
import { SidebarContainer } from "../containers/SidebarContainer"

export default function Feed() {
  // Seperates sidebar and content
  const Wrapper = styled.div`
    display: flex;
  `

  return (
    <Wrapper>
      <SidebarContainer/>
      <FeedContainer/>
    </Wrapper>
  )
}