import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components/macro"
import { ArticleInfo, Header } from "../components"
import * as ROUTES from "../constance/routePath"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
`

export default function ArticleInfoContainer({
  children,
  location,
  ...restProps
}) {
  const [locationInfo, setLocationInfo] = useState(location.state)


  return (
    <Wrapper>
      <Header />
      <ArticleInfo>
        <ArticleInfo.BackHome to={ROUTES.FEED}>
          Back to feed
        </ArticleInfo.BackHome>
        <ArticleInfo.Holder>
          <div>
            <ArticleInfo.Title>{locationInfo.title}</ArticleInfo.Title>
          </div>
          <ArticleInfo.InfoHolder>
            <ArticleInfo.Date>{locationInfo.time}</ArticleInfo.Date>
            <span></span>
            <ArticleInfo.Name>{locationInfo.name}</ArticleInfo.Name>
          </ArticleInfo.InfoHolder>
          <ArticleInfo.Image src={locationInfo.photoURL} />
          <ArticleInfo.Content>
            <p>{locationInfo.content}</p>
          </ArticleInfo.Content>
        </ArticleInfo.Holder>
      </ArticleInfo>
    </Wrapper>
  )
}
