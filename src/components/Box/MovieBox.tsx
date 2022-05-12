import { IResult } from 'types/movie'
import styles from './MovieBox.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import img from '../../assets/images/no-img.png'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import { bookmarkList, bookmarkIdList } from 'atom'
import Modal from '../Modals/Modal'
import { useState } from 'hooks'
import { MouseEventHandler } from 'react'

interface BoxProps {
  item: IResult
}

const MovieBox = ({ item }: BoxProps): React.ReactElement => {
  const [bookmarkId, setBookmarList] = useRecoilState(bookmarkIdList)
  const [modalOpen, setModalOpen] = useState(false)
  const alertHandle = () => {
    setModalOpen(true)
  }

  const closeModal:MouseEventHandler<HTMLButtonElement> = () => {
    setModalOpen(false)
  }

  return (
    <li className={styles.boxContainer}>
      <Modal item={item} open={modalOpen} close={closeModal} />
      <div className={styles.boxWrapper} onClick={alertHandle} aria-hidden>
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
            {bookmarkId.includes(item.id) ? (
              <FontAwesomeIcon icon={faStar} color='red' />
            ) : (
              <FontAwesomeIcon icon={faStar} />
            )}
          </button>
        </div>
      </div>
    </li>
  )
}
export default MovieBox
