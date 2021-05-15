import styled from "styled-components/macro"

export const Container = styled.div`
  min-width: 300px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.blockBg};

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 140px;
  background-color: ${(props) => props.theme.sidebarTop};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`
export const Holder = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  margin-left: 20px;
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
  padding-left: 17px;
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
  color: ${props => props.theme.userInfo};
  text-transform: uppercase;
`

