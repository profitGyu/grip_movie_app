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
      <section>
        <header>
          <button type='button' onClick={close}>
            &times;
          </button>
        </header>
        <main>
          <div>
            <div className={styles.mainTitle}>{item?.title}</div>
            {bookmarkIs ? <div>즐겨찾기에서 해제합니다.</div> : <div>즐겨찾기에 등록합니다.</div>}
          </div>
        </main>
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
              해제
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
              추가
            </button>
          )}

          <button type='button' onClick={close}>
            아니요
          </button>
        </footer>
      </section>
    </div>
  )
}

export default Modal
