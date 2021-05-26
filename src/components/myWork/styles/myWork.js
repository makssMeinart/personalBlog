import { Link } from "react-router-dom"
import styled from "styled-components/macro"

export const Title = styled.h4`
  font-size: 1.3125rem;
  line-height: 21px;
  color: ${(props) => props.theme.title};
  margin: 0 0 30px 0;
`
export const Item = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.blockBg};
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  } 

  :not(:last-child) {
    margin-bottom: 30px;
  }
`

export const Cover = styled.div`
  min-width: 52%;
  background-image: url(${({src}) => src});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 250px;
  } 
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5625rem;
`

export const ContentTitle = styled.h5`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 28px;
  color: ${(props) => props.theme.title};
  margin: 0 0 1.875rem 0;
`

export const ContentBody = styled.p`
  font-weight: 300;
  font-size: 1rem;
  line-height: 27px;
  color: ${(props) => props.theme.description};
  margin: 0 0 30px 0;
`

export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: ${({noButton}) => noButton ? "0" : "90px"};
`

export const Tools = styled.div`
  font-size: 0.6875rem;
  line-height: 13px;
  background: #ea8c1e;
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
  color: ${(props) => props.theme.title};
`

export const Continue = styled.a`
  font-size: 0.75rem;
  line-height: 14px;
  color: ${(props) => props.theme.title};
  padding: 0.5rem 0.875rem;
  text-decoration: none;
  background-color: #3137c9;
  box-shadow: 0px 4px 15px -7px rgba(48, 55, 201, 0.3);
  border-radius: 5px;
  align-self: flex-end;
`
