import { IResult } from 'types/movie'
import styles from './MovieBox.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

type BoxProps = {
  item: IResult
}

const MovieBox = ({ item }: BoxProps): React.ReactElement => (
  <li className={styles.boxContainer}>
    <div className={styles.boxWrapper}>
      <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title} />
      <div>
        {item.title}
        {item.release_date}
      </div>
      <div>
        <button type='button'>
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
    </div>
  </li>
)
export default MovieBox
