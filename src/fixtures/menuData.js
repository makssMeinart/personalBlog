import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import * as FaIcons from "react-icons/fa"

export const menuData = [
  {
    "title": "Feed",
    "icon": <AiIcons.AiOutlineHome />,
    "path": "/feed"
  },
  {
    "title": "Articles",
    "path": "/feed",
    "icon": <RiIcons.RiArticleLine />,
    "children": [
      {
        "title": "How to learn React",
        "path": "articles/10371890"
      },
      {
        "title": "How to pet a dog?",
        "path": "articles/1037112312"
      },
      {
        "title": "Why is Mark Dayn?",
        "path": "articles/142371890"
      }
    ]
  },
  {
    "title": "Create Article",
    "icon": <RiIcons.RiArticleLine />,
    "path": "/create-article"
  },
  {
    "title": "About Me",
    "icon": <FaIcons.FaUserTie />,
    "path": "/about-me"
  }
]