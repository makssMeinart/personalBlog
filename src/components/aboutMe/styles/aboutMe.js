import { Link } from "react-router-dom"
import styled from "styled-components/macro"

export const Card = styled.div`
  background-color: ${(props) => props.theme.blockBg};
  padding: 1.5625rem;
  color: ${(props) => props.theme.title};
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
`

export const BackHome = styled(Link)`
  align-self: flex-start;
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  opacity: 0.6;
  color: ${props => props.theme.title};

  :hover {
    opacity: 1;
    text-decoration: underline;
  }
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.3125rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.title};
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: 10px;

  @media screen and (max-width: 530px) {
    flex-direction: column;
    gap: 0;
    margin-bottom: 1rem;
  }
`

export const Col = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.1rem;
  margin-bottom: .7rem;
  line-height: 1.2;

  @media screen and (max-width: 530px) {
    margin-bottom: 0;
  }
`

export const Continue = styled.a`
  color: ${(props) => props.theme.acccent};
`
