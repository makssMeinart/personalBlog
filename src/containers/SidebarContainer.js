import Menu from "../components/menu";
import Sidebar from "../components/sidebar";

// Hooks
import {useAuthListener} from "../hooks"

export function SidebarContainer() {
  const { user } = useAuthListener()

  return (
    <Sidebar >
      <Sidebar.Top>
        <Sidebar.Holder>
          <Sidebar.Icon src={user.photoURL}/>
          <Sidebar.UserInfo>
            <Sidebar.Name>
              {user.displayName}
            </Sidebar.Name>
            <Sidebar.Description>
              Web Developer
            </Sidebar.Description>
          </Sidebar.UserInfo>
        </Sidebar.Holder>
      </Sidebar.Top>
      {/* Menu */}
      <Menu/>
    </Sidebar>
  )
}