import { MouseEvent, MouseEventHandler, useState } from 'react'
import { IResult } from 'types/movie'
import styles from './Modal.module.scss'
import useBookMarkCore from 'hooks/moives/useBookmarkCore'

interface Modaltype {
  open?: boolean
  close: MouseEventHandler<HTMLButtonElement>
  item: IResult
}

const Modal = ({ open, close, item }: Modaltype) => {
  const { handleUpdateBookmarkIdList, handelUpdateBookmarkList } = useBookMarkCore()
  const moviesId = item.id

  return (
    <div className={open ? styles.modal : styles.closeModal}>
      <section>
        <header>
          <button type='button' onClick={close}>
            &times;
          </button>
        </header>
        <main>
          <div>{`${item?.title}를 즐겨찾기에 등록합니다.`}</div>
        </main>
        <footer>
          <button
            type='button'
            onClick={(e) => {
              close(e)
              handleUpdateBookmarkIdList(moviesId)
							handelUpdateBookmarkList({item})
            }}
          >
            예
          </button>
          <button type='button' onClick={close}>
            아니요
          </button>
        </footer>
      </section>
    </div>
  )
}

export default Modal
