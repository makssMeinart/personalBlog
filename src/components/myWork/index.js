import {Container, Inner} from "../../constance/theme"
import {
  Title,
  Item,
  Cover,
  Content,
  ContentTitle,
  ContentBody,
  Features,
  Tools,
  Continue
} from "./styles/myWork"

export default function MyWork({children}){
  return (
    <Container>
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}

MyWork.Title = function MyWorkTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

MyWork.Item = function MyWorkItem({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>
}

MyWork.Cover = function MyWorkCover({children, src, ...restProps}) {
  return <Cover src={src} {...restProps}>{children}</Cover>
}

MyWork.Content = function MyWorkContent({children, ...restProps}) {
  return <Content {...restProps}>{children}</Content>
}

MyWork.ContentTitle = function MyWorkContentTitle({children, ...restProps}) {
  return <ContentTitle {...restProps}>{children}</ContentTitle>
}

MyWork.ContentBody = function MyWorkBody({children, ...restProps}) {
  return <ContentBody {...restProps}>{children}</ContentBody>
}

MyWork.Features = function MyWorkFeatures({children, ...restProps}) {
  return <Features {...restProps}>{children}</Features>
}

MyWork.Tools = function MyWorkTools({children, ...restProps}) {
  return <Tools {...restProps}>{children}</Tools>
}

MyWork.Continue = function MyWorkContinue({children, ...restProps}) {
  return <Continue {...restProps}>{children}</Continue>
}