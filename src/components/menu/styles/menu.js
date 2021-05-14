import styled from "styled-components/macro"

export const Container = styled.ul`
  margin: 0;
  padding: 1rem 0 0 0;

  > a {
    text-decoration: none;
  }
`

export const MenuItem = styled.li``

export const MenuItemTop = styled.div`
  display: flex;
  align-items: center;
  transition: .1s linear background-color;

  :hover {
    background-color: ${(props) => props.theme.accent};
  }
`

export const MenuTitle = styled.p`
  color: ${(props) => props.theme.title};
  flex-grow: 1;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.3125rem;
  pointer-events: none;
`

export const MenuIcon = styled.div`
  color: ${(props) => props.theme.title};
  padding: 0 20px;
  pointer-events: none;

  svg {
    height: 19px;
    width: 19px;
  }
`

export const MenuItemDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 4rem;
`

export const DropdownItem = styled.div`

  :first-child {
    margin-top: 1rem;
  }

  :last-child {
    margin-bottom: 1rem;
  }

  a {
    font-size: 0.875rem;
    line-height: 16px;
    color: ${(props) => props.theme.title};
    text-decoration: none;

    :hover {
      color: ${props => props.theme.accent};
    }
  }
`
