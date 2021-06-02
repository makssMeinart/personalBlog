import styled from "styled-components/macro"

export const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`

export const Inner = styled.div`
  padding: 3rem 0;
  height: inherit;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Searchbox = styled.div`
  height: 75px;
  width: 100%;
  background-color: ${(props) => props.theme.inputBg};
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.45);
`

export const Search = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
`

export const SearchInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  padding: 0 0.7rem;
  margin-left: 1rem;
  color: ${(props) => props.theme.title};
  align-self: center;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 15px;
    line-height: 1.125rem;
    color: ${props => props.theme.description};
  }
`

export const SearchButton = styled.button`
  min-width: 45px;
  height: 45px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${props => props.theme.accent};
  border: none;
  margin: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    margin: 0 15px;
  }

  svg {
    color: ${props => props.theme.title};
    margin-left: 5px;
  }
`
export const Content = styled.div``