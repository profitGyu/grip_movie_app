import { useRecoilState } from 'recoil'
import { bookmarkIdList, bookmarkList } from 'atom'
import store from 'storejs'
import { IResult } from 'types/movie'

interface BoxProps {
  item: IResult
}

const useBookMarkCore = () => {
  const [bookmarkId, setbookmarkId] = useRecoilState(bookmarkIdList)
  const [bookmark, setBookmark] = useRecoilState(bookmarkList)

  const handleUpdateBookmarkIdList = (movieId: number) => {
    const newBookmarkIdList = [...bookmarkId, movieId]
    setbookmarkId(newBookmarkIdList)
    store.set('bookmarkIdList', newBookmarkIdList)
  }

  const handleUpdateBookmarkList = ({ item }: BoxProps) => {
    const add = {
      bookmarkId: 1,
    }
    const molist = { ...item, ...add }
    const newBookmarkList = [...bookmark, molist]
    setBookmark(newBookmarkList)
    store.set('bookmarkList', newBookmarkList)
  }

  const handleDeleteBookmarkIdList = (movieId: number) => {
    const newBookmarkIdList = bookmarkId.filter((ement) => ement !== movieId)
    setbookmarkId(newBookmarkIdList)
    store.set('bookmarkIdList', newBookmarkIdList)
  }

  const handleDeleteBookmarkList = (movieId: number) => {
    const newBookmarkList = bookmark.filter((ement) => ement.id !== movieId)
    setBookmark(newBookmarkList)
    store.set('bookmarkList', newBookmarkList)
  }

  const bookmarkListFirstUpdate = () => {
    const storeBookmarkList = store.get('bookmarkList')
    if (storeBookmarkList) {
      setBookmark(storeBookmarkList)
    }
  }

  const bookmarkIdListFirstUpdate = () => {
    const storeBookmarkIdList = store.get('bookmarkIdList')
    if (storeBookmarkIdList) {
      setbookmarkId(storeBookmarkIdList)
    }
  }

  return {
    handleUpdateBookmarkIdList,
    bookmarkListFirstUpdate,
    bookmarkIdListFirstUpdate,
    handleUpdateBookmarkList,
    handleDeleteBookmarkIdList,
    handleDeleteBookmarkList
  }
}

export default useBookMarkCore
