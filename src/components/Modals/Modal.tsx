import { MouseEventHandler } from 'react'
import { IResult } from 'types/movie'
import styles from './Modal.module.scss'
import useBookMarkCore from 'hooks/moives/useBookmarkCore'

interface Modaltype {
  open?: boolean
  close: MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  item: IResult
  bookmarkIs?: boolean
}

const Modal = ({ open, close, item, bookmarkIs }: Modaltype) => {
  const { handleUpdateBookmarkIdList, handleUpdateBookmarkList, handleDeleteBookmarkIdList, handleDeleteBookmarkList } =
    useBookMarkCore()
  const moviesId = item.id
  return (
    <div className={open ? styles.modal : styles.closeModal} onClick={close} aria-hidden>
      <section
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path})`,

          backgroundRepeat: 'no-repeat',
        }}
      >
        <header>
          <button type='button' onClick={close}>
            &times;
          </button>
        </header>
        <main>{}</main>
        <footer>
          {bookmarkIs ? (
            <button
              type='button'
              onClick={(e) => {
                close(e)
                handleDeleteBookmarkIdList(moviesId)
                handleDeleteBookmarkList(moviesId)
              }}
            >
              즐겨찾기 제거
            </button>
          ) : (
            <button
              type='button'
              onClick={(e) => {
                close(e)
                handleUpdateBookmarkIdList(moviesId)
                handleUpdateBookmarkList({ item })
              }}
            >
              즐겨찾기
            </button>
          )}

          <button type='button' onClick={close}>
            취소
          </button>
        </footer>
      </section>
    </div>
  )
}

export default Modal
