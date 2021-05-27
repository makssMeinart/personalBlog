import { Container, Inner } from "../../constance/theme"
import { Card, BackHome, Title, Row, Col, Continue } from "./styles/aboutMe"

export default function AboutMe({ children, ...restProps }) {
  return (
    <Container>
      <Inner>
        <Card>{children}</Card>
      </Inner>
    </Container>
  )
}

AboutMe.BackHome = function AboutMeBackHome({ children, ...restProps }) {
  return <BackHome {...restProps}>{children}</BackHome>
}

AboutMe.Row = function AboutMeRow({ children,flexDirection, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}

AboutMe.Col = function AboutMeCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>
}

AboutMe.Continue = function AboutMeContinue({ children, ...restProps }) {
  return <Continue {...restProps}>{children}</Continue>
}

AboutMe.Title = function AboutMeTitle({children}) {
  return <Title >{children}</Title>
}