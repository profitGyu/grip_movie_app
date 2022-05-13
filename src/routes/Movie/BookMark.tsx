import Layout from 'layouts/Moive/Layout'
import { bookmarkList } from 'atom'
import { useRecoilValue } from 'recoil'
import MovieBox from 'components/Box/MovieBox'
import useBookMarkCore from 'hooks/moives/useBookmarkCore'
import { useMount } from 'react-use'
import { EmptyResult } from 'components/Search/EmptyResult'

const BookMark = () => {
  const { bookmarkListFirstUpdate } = useBookMarkCore()
  const bookmarkValue = useRecoilValue(bookmarkList)

  useMount(() => {
    bookmarkListFirstUpdate()
  })

  return (
    <Layout>
      <h1>내 즐겨찾기</h1>
      {bookmarkValue.length !== 0 ? (
        bookmarkValue.map((item, index) => <MovieBox item={item} index={index} key={`bookmarkIndex-${index}`} />)
      ) : (
        <EmptyResult />
      )}
    </Layout>
  )
}
export default BookMark
