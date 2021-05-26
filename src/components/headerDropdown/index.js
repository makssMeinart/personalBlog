import { useAuthListener } from "../../hooks"
import * as ROUTES from "../../constance/routePath"
import { LockScreen, UnlockScreen } from "../../constance/theme"
import {
  Wrapper,
  Inner,
  Info,
  Poster,
  Holder,
  Icon,
  UserInfo,
  Name,
  Description,
  Menu,
  ItemHolder,
  Title,
  Subtitle,
  ItemLink,
} from "./styles/headerDropdown"
import useContent from "../../helpers/useDb"

export default function HeaderDropdown({
  children,
  dropdownState,
  ...restProps
}) {
  const { user } = useAuthListener()
  const { content } = useContent("content")

  return (
    <Wrapper dropdownState={dropdownState}>
      {dropdownState ? <UnlockScreen /> : <LockScreen />}
      <Inner>
        <Info>
          <Poster
            src={
              "../../../../images/background/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
            }
          />
          <Holder>
            <Icon>
              <img src={user.photoURL} alt="User Icon" />
            </Icon>
            <UserInfo>
              <Name>Makss</Name>
              <Description>Web Developer</Description>
            </UserInfo>
          </Holder>
        </Info>
        <Menu>
        <ItemLink to={ROUTES.FEED}>Feed</ItemLink>
          <ItemHolder>
            <Title>Articles</Title>
            {/* For every Article we want to display subtitle(Link) */}
            {content.map((item, index) => {
              if (item.type === "article") {
                return (
                  <Subtitle
                    key={index}
                    to={{
                      pathname: `/article/${item.path}`,
                      state: item,
                    }}
                  >
                    {item.title}
                  </Subtitle>
                )
              }
            })}
          </ItemHolder>
          <ItemLink to={ROUTES.CREATEARTICLE}>Create Article</ItemLink>
          <ItemLink to={ROUTES.ABOUTME}>About Me</ItemLink>
          <ItemLink to={ROUTES.MYWORK} highlight={"purple"}>My Work</ItemLink>
        </Menu>
      </Inner>
    </Wrapper>
  )
}
