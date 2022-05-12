import { useRecoilState } from 'recoil'
import { bookmarkIdList, bookmarkList } from 'atom'
import store from 'storejs'
import { IResult } from 'types/movie'

const useBookMarkCore = () => {
  const [bookmarkId, setbookmarkId] = useRecoilState(bookmarkIdList)
  const [bookmark, setBookmark] = useRecoilState(bookmarkList)

  const handleUpdateBookmarkIdList = (movieId: number) => {
    console.log("bookmarkId:", bookmarkId)
    const newBookmarkIdList = [...bookmarkId, movieId]
    setbookmarkId(newBookmarkIdList)
    store.set('bookmarkIdList', newBookmarkIdList)
  }

  interface BoxProps {
    item: IResult
  }

  const handelUpdateBookmarkList = ({ item }: BoxProps) => {
    const add = {
      bookmarkId: 1,
    }
    const molist = { ...item, ...add }
    const newBookmarkList = [...bookmark, molist]
    setBookmark(newBookmarkList)
    store.set('bookmarkList', newBookmarkList)
  }

  const bookmarkListFirstUpdate = () => {
    const storeBookmarkList = store.get('bookmarklist')
    if (storeBookmarkList) {
      setBookmark(storeBookmarkList)
    }
  }

  const bookmarkIdListFirstUpdate = () => {
    const storeBookmarkIdList = store.get('bookmarkIdList')
    console.log("storeBookmarkIdList:", storeBookmarkIdList)
    if (storeBookmarkIdList) {
        setbookmarkId(storeBookmarkIdList)
    }
  }

  return { handleUpdateBookmarkIdList, bookmarkListFirstUpdate, bookmarkIdListFirstUpdate , handelUpdateBookmarkList }
}

export default useBookMarkCore
