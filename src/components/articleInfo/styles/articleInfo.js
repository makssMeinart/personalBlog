import { Link } from "react-router-dom"
import styled from "styled-components/macro"

export const Container = styled.div`
  width: 85%;
  margin: 50px auto;
  background-color: ${(props) => props.theme.blockBg};
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 25px;
`

export const Holder = styled.div`
  display: flex;
  flex-direction: column;

  span {
    width: 6px;
    max-height: 6px;
    border-radius: 50%;
    backgroundcolor: ${(props) => props.theme.title} !importand;
    align-self: center;
  }
`
export const InfoHolder = styled.div`
  display: flex;
  padding-top: 10px;
  margin-bottom: 30px;
`
export const Image = styled.img`
  max-height: 230px;
`

export const BackHome = styled(Link)`
  align-self: flex-start;
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  opacity: 0.6;
  color: ${(props) => props.theme.title};

  :hover {
    opacity: 1;
    text-decoration: underline;
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3125rem;
  margin: 15px 0 0 0;
  color: ${(props) => props.theme.title};
`

export const Date = styled.p`
  font-size: 0.75rem;
  line-height: 14px;
  color: ${(props) => props.theme.time};
  padding-right: 7.5px;
  margin: 0;
`

export const Name = styled.p`
  font-size: 0.75rem;
  line-height: 14px;
  color: ${(props) => props.theme.time};
  padding-left: 7.5px;
  margin: 0;
`
export const Content = styled.div`
  p {
    font-size: 0.875rem;
    line-height: 21px;
    color: ${props => props.theme.title};
  }
`
