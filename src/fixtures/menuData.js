import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import * as FaIcons from "react-icons/fa"

export const menuData = [
  {
    title: "Feed",
    icon: <AiIcons.AiOutlineHome />,
    path: "/feed",
  },
  {
    title: "Articles",
    icon: <RiIcons.RiArticleLine />,
    children: [
      {
        title: "This working",
        path: "/article/hello",
      },
      {
        title: "This working",
        path: "/article/hello",
      },
    ],
  },
  {
    title: "Create Article",
    icon: <RiIcons.RiArticleLine />,
    path: "/create-article",
  },
  {
    title: "About Me",
    icon: <FaIcons.FaUserTie />,
    path: "/about-me",
  },
]
