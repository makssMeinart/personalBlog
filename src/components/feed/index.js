import {
  Searchbox,
  SearchInput,
  Search,
  SearchButton,
  Container,
  Inner,
} from "./styles/feed"

// Icons
import { IoSendSharp } from "react-icons/io5"

export function Feed({ children, ...restProps }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  )
}

Feed.Searchbox = function FeedSearchbox({ children, ...restProsp }) {
  return <Searchbox {...restProsp}>{children}</Searchbox>
}

Feed.Search = function FeedSearch({ children, ...restProps }) {
  return <Search {...restProps}>{children}</Search>
}

Feed.SearchInput = function FeedSearchInput({ ...restProps }) {
  return <SearchInput {...restProps} />
}

Feed.SearchButton = function FeedSearchButton({ children, ...restProps }) {
  return (
    <SearchButton {...restProps}>
      <IoSendSharp />
    </SearchButton>
  )
}
