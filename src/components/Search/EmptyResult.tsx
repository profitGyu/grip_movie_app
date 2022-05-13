import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import styles from './EmptyResult.module.scss'

export const EmptyResult = () => {
  return (
    <div className={styles.emptyResult}>
      <div className={styles.emptyResultContainer}>
        <FontAwesomeIcon icon={faVideoSlash} className={styles.videoIcon} />
      </div>
      <div>
        <h1>검색 결과가 없습니다</h1>
      </div>
    </div>
  )
}
