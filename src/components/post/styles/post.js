import styled from "styled-components/macro"

export const Container = styled.div`
  background-color: ${(props) => props.theme.blockBg};
  padding: 23px 23px 27px 23px;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;

  :not(:last-child) {
    margin-bottom: 30px;
  }
`

export const Content = styled.p`
  font-size: 0.875rem;
  line-height: 21px;
  color: ${(props) => props.theme.description};
  margin: 0;
`

export const Date = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
  font-size: 0.75rem;
  line-height: 14px;
  color: ${(props) => props.theme.time};
`
