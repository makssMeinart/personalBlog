import styled from "styled-components/macro"
import { Header } from "../components"
import MyWork from "../components/myWork"

export default function MyWorkContainer() {
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
      <MyWork>
        <MyWork.Title>My Work</MyWork.Title>
        {/* Item */}
        <MyWork.Item>
          <MyWork.Cover src={"images/background/netflix.png"} />
          <MyWork.Content>
            <MyWork.ContentTitle>Netflix Clone</MyWork.ContentTitle>
            <MyWork.ContentBody>Technology used: 1. Firebase && Firestore, 2. Firebase Authentication, 3. Compound Components, 4. Styled-Components, 5. Firesore DB, 6. Promises, 7. Responsive Design, 8. Hooks && Custom Hooks, 9. Protected && Redirect Routes </MyWork.ContentBody>
            <MyWork.Features>
              <MyWork.Tools>JS</MyWork.Tools>
              <MyWork.Tools>HTML</MyWork.Tools>
              <MyWork.Tools>CSS</MyWork.Tools>
              <MyWork.Tools>React</MyWork.Tools>
              <MyWork.Tools>Hooks</MyWork.Tools>
              <MyWork.Tools>Firebase</MyWork.Tools>
              <MyWork.Tools>Responsive</MyWork.Tools>
            </MyWork.Features>
            <MyWork.Continue href={"https://github.com/makssMeinart/netflix-clone"} target={"blank"}>Git Hub</MyWork.Continue>
            <MyWork.Continue href={"https://makssmeinart.github.io/netflix-clone/"} target={"blank"}>Open Live</MyWork.Continue>
          </MyWork.Content>
        </MyWork.Item>
        {/* Second Item */}
        <MyWork.Item>
          <MyWork.Cover src={"images/background/personal-blog.jpeg"} />
          <MyWork.Content>
            <MyWork.ContentTitle>Personal Blog</MyWork.ContentTitle>
            <MyWork.ContentBody>
              Technology used: 1. Hooks && Custom Hooks, 2. Protected &&
              Redirect Routes, 3. Firebase & Firestore, 4. Firebase
              Authentication, 5. Firestore DB, 6. Dark Mode, 7. Styled
              Components. 8. Responsive Design and more... Why Blog?: While
              working on Netflix I have learned a ton of new stuff, And I
              figured out that blog will be a fair next step
            </MyWork.ContentBody>
            <MyWork.Features>
              <MyWork.Tools>JS</MyWork.Tools>
              <MyWork.Tools>React</MyWork.Tools>
              <MyWork.Tools>CSS</MyWork.Tools>
              <MyWork.Tools>HTML</MyWork.Tools>
              <MyWork.Tools>Firebase</MyWork.Tools>
              <MyWork.Tools>Responsive</MyWork.Tools>
            </MyWork.Features>
            <MyWork.Continue href={"https://github.com/makssMeinart/personalBlog"} target={"blank"}>Git Hub</MyWork.Continue>
          </MyWork.Content>
        </MyWork.Item>
      </MyWork>
    </Wrapper>
  )
}
