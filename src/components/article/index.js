import { Redirect, Route, Switch } from "react-router"
import useContent from "../../helpers/useDb"
import { Feed } from "../../pages"
import ArticleInfo from "../../pages/ArticleInfo"
import {
  Container,
  Inner,
  Photo,
  Title,
  Description,
  Info,
  Name,
  Time,
  ReadMore,
} from "./styles/article"

export default function Article({ item }) {

  function addDefaultSrc(e) {
    e.target.src = "../../../images/article/markus-spiske-iar-afB0QQw-unsplash.jpg"
  }
  return (
    <Container>
      <Photo src={item.photoURL} onError={e => addDefaultSrc(e)} alt="article photo" />
      <Inner>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Info>
          <div>
            <Time>{item.time}</Time>
            <span></span>
            <Name>{item.name}</Name>
          </div>
          <div>
            <ReadMore
              to={{
                pathname: `/article/${item.path}`,
                state: item
              }}
            >
              Read More
            </ReadMore>
          </div>
        </Info>
      </Inner>
    </Container>
  )
}
