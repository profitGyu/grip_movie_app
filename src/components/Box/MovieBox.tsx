import styles from './MovieBox.module.scss'
import Modal from '../Modals/Modal'
import img from '../../assets/images/no-img.png'
import useDragDrop from 'hooks/moives/useFrageDorp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

import { useRecoilValue } from 'recoil'
import { bookmarkIdList, movieGenreListSate } from 'atom'
import { useState } from 'hooks'
import { MouseEventHandler } from 'react'

import { IResult } from 'types/movie'

interface BoxProps {
  item: IResult
  index?: number
}

const MovieBox = ({ item, index }: BoxProps): React.ReactElement => {
  const bookmarkId = useRecoilValue(bookmarkIdList)
  const movieGenreList = useRecoilValue(movieGenreListSate)

  const [modalOpen, setModalOpen] = useState(false)

  const { handleDragStart, handleDragOver, handleDragEnd, handleOnDrop } = useDragDrop()

  const bookmarkIs = bookmarkId.includes(item.id)

  const showModal = () => {
    setModalOpen(true)
  }

  const closeModal: MouseEventHandler<HTMLButtonElement | HTMLDivElement> = () => {
    setModalOpen(false)
  }

  return (
    <li
      className={styles.boxContainer}
      draggable
      data-position={index}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrop={handleOnDrop}
    >
      <Modal item={item} open={modalOpen} close={closeModal} bookmarkIs={bookmarkIs} />
      <div className={styles.boxWrapper} onClick={showModal} aria-hidden>
        {item.backdrop_path ? (
          <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title} />
        ) : (
          <img src={img} alt={item.title} />
        )}
        <div className={styles.boxContent}>
          <h2>{item.title}</h2>
          <div>{item.release_date}</div>
          <ul>
            {item.genre_ids.map((id, genreIndex) => {
              const results = movieGenreList.genres.filter((elemnt) => elemnt.id === id)[0]
              return <li key={`genre-${genreIndex}`}>{results.name}</li>
            })}
          </ul>
        </div>
        <div className={styles.boxBookmark}>
          <button type='button' className={styles.bookmarkButton}>
            {bookmarkIs ? (
              <FontAwesomeIcon icon={faBookBookmark} color='#BA4384' size='2x' />
            ) : (
              <FontAwesomeIcon icon={faBookBookmark} color='#0086C1' size='2x' />
            )}
          </button>
        </div>
      </div>
    </li>
  )
}
export default MovieBox
