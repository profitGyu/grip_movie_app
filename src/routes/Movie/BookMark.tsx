import { bookmarkList } from 'atom'
import { useRecoilValue } from 'recoil'

import Layout from 'layouts/Moive/Layout'
import MovieBox from 'components/Box/MovieBox'
import { EmptyResult } from 'components/Search/EmptyResult'
import SEO from 'components/SEO'

import useBookMarkCore from 'hooks/moives/useBookmarkCore'
import { useMount } from 'react-use'

const BookMark = () => {
  const { bookmarkListFirstUpdate } = useBookMarkCore()

  const bookmarkValue = useRecoilValue(bookmarkList)

  useMount(() => {
    bookmarkListFirstUpdate()
  })

  return (
    <Layout mainTitle='내 즐겨찾기'>
      <SEO title='BookMark' />
      {bookmarkValue.length !== 0 ? (
        bookmarkValue.map((item, index) => <MovieBox item={item} index={index} key={`bookmarkIndex-${item.id}`} />)
      ) : (
        <EmptyResult content='즐겨찾기 목록이 없습니다.' />
      )}
    </Layout>
  )
}
export default BookMark
