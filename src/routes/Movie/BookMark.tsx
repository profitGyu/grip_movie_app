import Layout from 'layouts/Moive/Layout'
import { bookmarkList } from 'atom'
import { useRecoilValue } from 'recoil'
import MovieBox from 'components/Box/MovieBox'
import useBookMarkCore from 'hooks/moives/useBookmarkCore'
import { useMount } from 'react-use'

const BookMark = () => {
  const { bookmarkListFirstUpdate } = useBookMarkCore()
  const bookmarkValue = useRecoilValue(bookmarkList)

  useMount(() => {
    bookmarkListFirstUpdate()
  })

  return (
    <Layout>
      {bookmarkValue.map((item, index) => (
        <MovieBox item={item} index={index} key={`test-${index}`} />
      ))}
    </Layout>
  )
}
export default BookMark
