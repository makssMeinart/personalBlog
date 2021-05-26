import styled from "styled-components/macro"

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`

export const Holder = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 1180px) {
    width: 100%;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.description};
  padding: 0 1rem;
  border: none;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`

export const Name = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.title};
`
export const Submit = styled.button`
  padding: .5em 1.7em;
  border: none;
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.title};
  cursor: pointer;
  transition: .1s linear all;
  border-radius: 5px;
  align-self: flex-end;


  :hover {
    background-color: transparent;
    border: 2px solid ${props => props.theme.title};
  }
`
