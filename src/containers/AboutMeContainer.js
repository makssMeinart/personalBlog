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
            During the quarantine I somehow ended up on freecode camp on HTML tutorial, I find it pretty interesting to say at least. It wasn't long from there when I began to go through tutorials on yoututbe and after a month or so I was building out free PSD Templates and stopped around 10. I liked it but left like Im missing something out. Thats when I went and done a JS basics tutorial, It took me about 30 days to complete it with homework and other fun projects to do, That gave me a strong base and confidence to dive into React. When I just header about react I didn't really know what it is and what it's used, That changed rather quickly after couple small projects like: Todo List, Simple Web Pages, Half of Amazon Clone, I figured out that I'm ready to dive in deeper into something more complex and interesting. So I find probably best Netflix Clone on youtube by a Senior Developer and codded along trying to suck up as much information as possible after about 3 weeks the project was done so was I to begin building my own thing. I have spend a little time thinking what would be the best thing to build with my current skill and decided that its going to be a plane simple blog, It literally contains every feature I have learned in Netflix clone and since there is no help I had to figure out a lot of stuff on my own. With those 2 and other many smaller things build I think I'm ready for some real live experience  
          </AboutMe.Col>
        </AboutMe.Row>
      </AboutMe>
    </Wrapper>
  )
}
