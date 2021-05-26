import { Link } from "react-router-dom"
import styled from "styled-components/macro"

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 35px);
  background: ${(props) => props.theme.headerBar};
  left: ${({ dropdownState }) => (dropdownState ? "-100%" : "0")};
  transition: 0.1s ease all;
  z-index: 999;
`
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
`

export const Info = styled.div``

export const Poster = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ src }) => src});
  background-size: cover;

  @media screen and (max-width: 500px) {
    height: 100px;
  }
  
  @media screen and (max-height: 400px) {
    height: 100px;
  }
`

export const Holder = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #2c2c2c;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  overflow: hidden;
  border: 3px solid ${(props) => props.theme.title};
  border-radius: 50%;
  transform: translateY(-12px);

  img {
    object-fit: cover;
    min-width: 65px;
    height: 65px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid ${(props) => props.theme.title};
  }
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`
export const Name = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.title};
  padding-bottom: 4px;
`
export const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.userInfo};
  text-transform: uppercase;
`

// Menu

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`

export const ItemHolder = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  line-height: 19px;
  text-decoration: none;
  color: ${(props) => props.theme.title};
  margin: 1rem 0;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    margin: .5rem 0;
  }
`

export const Subtitle = styled(Link)`
  font-weight: 300;
  font-size: 1rem;
  line-height: 19px;
  text-decoration: none;
  color: ${(props) => props.theme.description};
  margin: .5rem 0 .5rem 1.0625rem;

  @media screen and (max-width: 500px) {
    font-size: .8rem;
    margin: .15rem 0 .15rem .56rem;
  }

  :hover {
    color: ${(props) => props.theme.accent};
  }
`

export const ItemLink = styled(Link)`
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 19px;
  text-decoration: none;
  color: ${props => props.theme.title};
  color: ${({highlight}) => highlight};
  margin: 1rem 0;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    margin: .5rem 0;
  }

  :hover {
    color: ${(props) => props.theme.accent};
  }
`
