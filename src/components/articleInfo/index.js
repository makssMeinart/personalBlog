import {Container, Inner, BackHome, Holder, Image, InfoHolder, Title, Date, Name, Content} from "./styles/articleInfo"

export default function ArticleInfo({ children, ...restProps }) {

  return (
    <Container >
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}

ArticleInfo.BackHome = function ArticleInfoBackHome({children, ...restProps}) {
  return <BackHome {...restProps} >{children}</BackHome>
}

ArticleInfo.Holder = function ArticleInfoHolder({children, ...restProps}) {
  return <Holder {...restProps} >{children}</Holder>
}

ArticleInfo.Image = function ArticleInfoImage({...restProps}) {
  function addDefaultSrc(e){
    e.target.src = "../../../images/article/markus-spiske-iar-afB0QQw-unsplash.jpg"
  }

  return <Image {...restProps} onError={e => addDefaultSrc(e)} /> 
}

ArticleInfo.InfoHolder = function ArticleInfoInfoHolder({children, ...restProps}) {
  return <InfoHolder {...restProps} >{children}</InfoHolder>
}

ArticleInfo.Title = function ArticleInfoTitle({children, ...restProps}) {
  return <Title {...restProps} >{children}</Title>
}

ArticleInfo.Date = function ArticleInfoDate({children, ...restProps}) {
  return <Date {...restProps} >{children}</Date>
}

ArticleInfo.Name = function ArticleInfoName({children, ...restProps}) {
  return <Name {...restProps} >{children}</Name>
}

ArticleInfo.Content = function ArticleInfoContent({children, ...restProps}) {
  return <Content {...restProps} >{children}</Content>
}