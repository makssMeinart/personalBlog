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
  max-width: 85%;
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
  color: ${(props) => props.theme.title};
  cursor: pointer;
  margin-right: 5px;
`

export const Theme = styled.button`
  background-color: ${({ theme }) =>
    theme === "light" ? "#000" : "whitesmoke"};
  border-radius: 10px;
  border: none;
  width: 45px;
  height: 20px;
  cursor: pointer;
  text-align: ${({ theme }) => (theme === "dark" ? "right" : "left")};

  svg {
    color: ${({ theme }) => (theme === "light" ? "whitesmoke" : "#000")};
  }
`

export const Burger = styled.div`
  position: relative;
  width: 30px;
  height: 20px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
  }

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.title};
    transform: translateY(-50%);
    transform: rotate(${({dropdownState}) => dropdownState ? "0" : "45deg" });
    top: ${({dropdownState}) => dropdownState ? "50%" : "45%"};
    transition: .15s linear all;
  }

  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.title};
    transform: translateY(-50%);
    transform: rotate(${({dropdownState}) => dropdownState ? "0" : "-45deg" });
    bottom: ${({dropdownState}) => dropdownState ? "0" : "45%"};
    transition: .15s linear all;
  }

  div {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.title};
    opacity: ${({dropdownState}) => dropdownState ? "100%" : "0" };
    transition: .15s linear all;
  }
`
