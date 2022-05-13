import { IResult } from 'types/movie'
import styles from './MovieBox.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import img from '../../assets/images/no-img.png'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import { bookmarkList, bookmarkIdList } from 'atom'
import Modal from '../Modals/Modal'
import { useMount, useState } from 'hooks'
import { MouseEventHandler } from 'react'

interface BoxProps {
  item: IResult
}

const MovieBox = ({ item }: BoxProps): React.ReactElement => {
  const [bookmarkId, setBookmarList] = useRecoilState(bookmarkIdList)
  const [modalOpen, setModalOpen] = useState(false)

  const bookmarkIs = bookmarkId.includes(item.id)

  const showModal = () => {
    setModalOpen(true)
  }

  const closeModal: MouseEventHandler<HTMLButtonElement> = () => {
    setModalOpen(false)
  }

  return (
    <li className={styles.boxContainer}>
      <Modal item={item} open={modalOpen} close={closeModal} bookmarkIs={bookmarkIs} />
      <div className={styles.boxWrapper} onClick={showModal} aria-hidden>
        {item.backdrop_path ? (
          <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title} />
        ) : (
          <img src={img} alt={item.title} />
        )}

        <div>
          {item.title}
          {item.release_date}
        </div>
        <div>
          <button type='button'>
            {bookmarkIs ? <FontAwesomeIcon icon={faStar} color='red' /> : <FontAwesomeIcon icon={faStar} />}
          </button>
        </div>
      </div>
    </li>
  )
}
export default MovieBox
