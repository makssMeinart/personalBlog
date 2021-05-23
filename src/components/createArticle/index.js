import { Holder, Input, Name, Content, Submit } from "./styles/createArticle"
import { Container, Inner } from "../../constance/theme"

export default function CreateArticle({ children, ...restProps }) {
  return (
    <Container>
      <Inner>
        <Content>{children}</Content>
      </Inner>
    </Container>
  )
}

CreateArticle.Holder = function CreateArticleHolder({
  children,
  ...restProps
}) {
  return <Holder>{children}</Holder>
}

CreateArticle.Input = function CreateArticleInput({ ...restProps }) {
  return <Input {...restProps} />
}

CreateArticle.Name = function CreateArticleName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>
}

CreateArticle.Submit = function CreateArticleSubmit({
  children,
  ...restProps
}) {
  return <Submit {...restProps}>{children}</Submit>
}
