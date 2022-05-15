import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import styles from './EmptyResult.module.scss'

interface emptyResultProp {
  content: string
}

export const EmptyResult = ({ content }: emptyResultProp) => {
  return (
    <div className={styles.emptyResult}>
      <div className={styles.emptyResultContainer}>
        <FontAwesomeIcon icon={faVideoSlash} className={styles.videoIcon} />
      </div>
      <div>
        <h1>{content}</h1>
      </div>
    </div>
  )
}
