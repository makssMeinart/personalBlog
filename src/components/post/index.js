import {
  Container,
  Content,
  Date
} from "./styles/post"

export function Post({ children, item, ...restProps }) {

  return (
    <Container restProps>
      <Content>
        {item.content}
      </Content>
      <Date>
        {item.time}
      </Date>
    </Container>
  )
}
