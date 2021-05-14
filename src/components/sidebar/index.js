import {
  Container,
  Top,
  Holder,
  Icon,
  Name,
  UserInfo,
  Description,
} from "./styles/sidebar"

export default function Sidebar({ children, ...restProps }) {
  return <Container>{children}</Container>
}

// Sidebar Top

Sidebar.Top = function SidebarTop({ children, ...restProps }) {
  return <Top {...restProps}>{children}</Top>
}

Sidebar.Holder = function SidebarHolder({ children, ...restProps }) {
  return <Holder {...restProps}>{children}</Holder>
}

Sidebar.Icon = function SidebarIcon({ src, ...restProps }) {
  return (
    <Icon {...restProps}>
      <img src={src} alt="User Icon" />
    </Icon>
  )
}

Sidebar.Holder = function SidebarHolder({ children, ...restProps }) {
  return <Holder {...restProps}>{children}</Holder>
}

Sidebar.UserInfo = function SidebarHolder({ children, ...restProps }) {
  return <UserInfo {...restProps}>{children}</UserInfo>
}

Sidebar.Name = function SidebarName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>
}

Sidebar.Description = function SidebarDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>
}
