import {
  Container,
  Inner,
  Title,
  Button

} from "./styles/signin"

export default function Signin({children, ...restProps}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

Signin.Inner = function SigninInner({children, ...restProps}) {
  return <Inner {...restProps} >{children}</Inner>
}

Signin.Title = function SigninTitle({children, ...restProps}) {
  return <Title {...restProps} >{children}</Title>
}

Signin.Button = function SigninButton({children, ...restProps}) {
  return <Button {...restProps} >{children}</Button>
}