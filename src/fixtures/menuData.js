import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"
import useContent from "../helpers/useDb"

export function UpdateSidebar() {
  const { content } = useContent("content")

  const currentArticles = []

  content.map(item => {
    if(item.type === "article") {
      let temp = {
        title: item.name,
        path: `${item.path}`,
        fullArticle: item
      }
      currentArticles.push(temp)
    }
  })

  const menuData = [
    {
      title: "Feed",
      icon: <AiIcons.AiOutlineHome />,
      path: "/feed",
    },
    {
      title: "Articles",
      icon: <RiIcons.RiArticleLine />,
      children: currentArticles
    },
    {
      title: "Create Article",
      icon: <RiIcons.RiArticleLine />,
      path: "/create-article",
    },
    {
      title: "My Work",
      icon: <MdIcons.MdWork/>,
      path: "/my-work",
    },
    {
      title: "About Me",
      icon: <FaIcons.FaUserTie />,
      path: "/about-me",
    },
  ]

  return menuData
}
