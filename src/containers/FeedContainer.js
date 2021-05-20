import Header from "../components/header"
import styled from "styled-components/macro"
import { useContext, useState } from "react"
import { sendPost } from "../helpers/sendPost"
// Context
import { ThemeContext } from "../context/themeSwitch"
import { FirebaseContext } from "../context/firebase"
import { db } from "../lib/firebase-prod"
import { Feed } from "../components/feed"

// Icons
import { IoSendSharp, IoTerminal } from "react-icons/io5"
import { Post } from "../components/post"
import useContent from "../helpers/useDb"
// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
`

export function FeedContainer() {
  const [message, setMessage] = useState("")
  const { content } = useContent("content")

  return (
    <Wrapper>
      <Header />
      <Feed>
        <Feed.Searchbox>
          <Feed.Search>
            <Feed.SearchInput
              setMessage={setMessage}
              value={message}
              placeholder="Search for something.."
            />
            <Feed.SearchButton onClick={() => sendPost(message, setMessage)}>
              <IoSendSharp />
            </Feed.SearchButton>
          </Feed.Search>
        </Feed.Searchbox>
        <Feed.Content>
          {content.map((item) => {
            if (item.type === "post") {
              return <Post key={item.uui} item={item} />
            }
          })}
        </Feed.Content>
      </Feed>
    </Wrapper>
  )
}
