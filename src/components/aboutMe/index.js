import { Container, Inner } from "../../constance/theme";

export default function AboutMe({children, ...restProps}) {
  return (
    <Container>
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}