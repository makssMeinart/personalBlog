import styled from "styled-components/macro"

export const Container = styled.div`
  background-color: ${(props) => props.theme.headerBar};
  height: 35px;
  box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.25);
`

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  height: inherit;
  margin: 0 auto;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`

export const Logout = styled.button`
  background: none;
  border: none;
  text-transform: uppercase;
  font-size: 0.6875rem;
  line-height: 13px;
  color: ${props => props.theme.title};
  cursor: pointer;
  margin-right: 5px;
`

export const Theme = styled.button`
  background-color: ${props => props.theme.description};
  border-radius: 10px;
  width: 50px;
  cursor: pointer;
  text-align: right;

  svg {
    heihgt: 100%;
  }
`

export const Searchbox = styled.div`
  background: transparent;
`

export const Search = styled.input`
  background-color: ${props => props.theme.sidebarTop};
  border: none;
  height: 35px;
  padding: 0 1rem;
  color: ${props => props.theme.title};

  :focus {
    outline: none;
  }
`
