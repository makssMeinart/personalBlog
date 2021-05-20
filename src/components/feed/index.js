import {
  Searchbox,
  SearchInput,
  Search,
  SearchButton,
  Container,
  Inner,
  Content,
} from "./styles/feed"
// Icons

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

Feed.SearchInput = function FeedSearchInput({setMessage, ...restProps }) {
  return <SearchInput onChange={e => setMessage(e.target.value)} {...restProps} />
}

Feed.SearchButton = function FeedSearchButton({ children, ...restProps }) {
  return <SearchButton {...restProps} >{children}</SearchButton>
}

Feed.Content = function FeedContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}
