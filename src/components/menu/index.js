import { menuData } from "../../fixtures/menuData"
import { Link } from "react-router-dom"

// Icons
import {
  Container,
  MenuIcon,
  MenuItem,
  MenuTitle,
  MenuItemTop,
  MenuItemDropdown,
  DropdownItem,
} from "./styles/menu"
import { useState } from "react"

export default function Menu({ children, ...restProps }) {
  const [showDropdown, setShowDropdown] = useState(true)

  const toggleDropdown = () => {
    console.log(showDropdown)
    return setShowDropdown((showDropdown) => !showDropdown)
  }

  return (
    <Container>
      {menuData.map((item, index) => (
        <Link to={item.path} key={index}>
          <MenuItem>
            <MenuItemTop onClick={item.children && toggleDropdown}>
              <MenuIcon>{item.icon}</MenuIcon>
              <MenuTitle>{item.title}</MenuTitle>
            </MenuItemTop>
            {/* Check if showDropdown is true and children exist*/}
            <MenuItemDropdown>
              {item.children &&
                showDropdown === true &&
                item.children.map((article, index) => (
                  <DropdownItem key={index}>
                    <Link to={article.path}>{article.title}</Link>
                  </DropdownItem>
                ))}
            </MenuItemDropdown>
          </MenuItem>
        </Link>
      ))}
    </Container>
  )
}
