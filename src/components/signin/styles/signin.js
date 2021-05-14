import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
  text-align: center;
  background: ${props => props.theme.title};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.headerBar};
  margin-top: 3.5rem;
`

export const Button = styled.button`
  border: 3px solid ${props => props.theme.headerBar};
  font-size: 1.3rem;
  padding: 0.3rem 1.3rem;
  cursor: pointer;
  background-color: ${props => props.theme.headerBar};
  color: ${props => props.theme.description};
  transition: all .3s ease;

  :hover {
    background-color: transparent;
    color: #000;
  }
`
