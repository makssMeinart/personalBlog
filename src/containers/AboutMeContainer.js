import styled from "styled-components/macro"
import { AboutMe, Header } from "../components"
// Routes
import * as ROUTES from "../constance/routePath"

export default function AboutMeContainer() {
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
      <AboutMe>
        <AboutMe.BackHome to={ROUTES.FEED}>Back to Feed</AboutMe.BackHome>
        <AboutMe.Title>About Me</AboutMe.Title>
        <AboutMe.Row>
          <AboutMe.Col>Name:</AboutMe.Col>
          <AboutMe.Col>Makss</AboutMe.Col>
        </AboutMe.Row>
        <AboutMe.Row>
          <AboutMe.Col>Email:</AboutMe.Col>
          <AboutMe.Continue href={"mailto:m.meinarts10@gmail.com<"}>
            m.meinarts10@gmail.com
          </AboutMe.Continue>
        </AboutMe.Row>
        <AboutMe.Row>
          <AboutMe.Col>GitHub:</AboutMe.Col>
          <AboutMe.Col>
            <AboutMe.Continue
              target="default"
              href={"https://github.com/makssMeinart"}
            >
              https://github.com/makssMeinart
            </AboutMe.Continue>
          </AboutMe.Col>
        </AboutMe.Row>
        <AboutMe.Row flexDirection={"column"}>
          <AboutMe.Col>My Story:</AboutMe.Col>
          <AboutMe.Col>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </AboutMe.Col>
        </AboutMe.Row>
      </AboutMe>
    </Wrapper>
  )
}
