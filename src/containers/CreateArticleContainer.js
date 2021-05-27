import Header from "../components/header"
import styled from "styled-components/macro"
import { CreateArticle } from "../components"
import { useState } from "react"
import { sendArticle } from "../helpers/sendArticle"
import { useHistory } from "react-router"
import * as ROUTES from "../constance/routePath"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
`

export function CreateArticleContainer() {
  // All nessesary data to send article (Sadly, This is the best way that comes to my head)
  const [photoURL, setPhotoURL] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [name, setName] = useState("")

  // Hisory
  const history = useHistory();

  const redirectArticle = () => {
    sendArticle(photoURL,title,description,content,name)

    let path = ROUTES.FEED; 
    history.push(path);
  }

  return (
    <Wrapper>
      <Header />
      <CreateArticle>
        {/* Image URL */}
        <CreateArticle.Holder>
          <CreateArticle.Name>Photo Url</CreateArticle.Name>
          <CreateArticle.Input onChange={e => setPhotoURL(e.target.value)}/>
        </CreateArticle.Holder>
        {/* Title */}
        <CreateArticle.Holder>
          <CreateArticle.Name>Article Title</CreateArticle.Name>
          <CreateArticle.Input onChange={e => setTitle(e.target.value)} />
        </CreateArticle.Holder>
        {/* Description */}
        <CreateArticle.Holder>
          <CreateArticle.Name>Article Description</CreateArticle.Name>
          <CreateArticle.Input onChange={e => setDescription(e.target.value)} />
        </CreateArticle.Holder>
        {/* Content */}
        <CreateArticle.Holder>
          <CreateArticle.Name>Article Content</CreateArticle.Name>
          <CreateArticle.Input onChange={e => setContent(e.target.value)}/>
        </CreateArticle.Holder>
        {/* Article Name */}
        <CreateArticle.Holder>
          <CreateArticle.Name>Article Name</CreateArticle.Name>
          <CreateArticle.Input onChange={e => setName(e.target.value)}/>
        </CreateArticle.Holder>
        {/* Redirect Full page */}
        {/* UUID */}
        <CreateArticle.Holder>
          <CreateArticle.Submit onClick={() => redirectArticle()}>
            Submit
          </CreateArticle.Submit>
        </CreateArticle.Holder>
      </CreateArticle>
    </Wrapper>
  )
}
