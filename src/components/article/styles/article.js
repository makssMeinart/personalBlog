import { Link } from "react-router-dom"
import styled from "styled-components/macro"

export const Container = styled.div`
  background-color: ${(props) => props.theme.blockBg};
  margin-bottom: 30px;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`

export const Photo = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.title};
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 21px;
  margin: 0;
`

export const Description = styled.div`
  font-size: 0.875rem;
  line-height: 21px;
  color: ${(props) => props.theme.description};
  margin-top: 15px;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;

  div {
    display: flex;
    align-items
  }

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.time};
    align-self: center;
  }
`

export const Time = styled.p`
  font-size: 0.75rem;
  line-height: 14px;
  color: ${(props) => props.theme.time};
  padding-right: 15px;
  margin: 0;
`

export const Name = styled.p`
  font-size: 0.75rem;
  line-height: 14px;
  color: ${(props) => props.theme.time};
  padding-left: 15px;
  margin: 0;
`

export const ReadMore = styled(Link)`
  color: ${(props) => props.theme.accent};
  font-size: 0.875rem;
  line-height: 16px;
  text-decoration: none;
`
