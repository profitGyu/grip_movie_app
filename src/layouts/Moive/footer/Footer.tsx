import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  const location = window.location.pathname

  return (
    <footer className={styles.footerContainer}>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={
                  location === '/grip_movie_app' || location === '/grip_movie_app/' ? styles.iconActive : 'nomal'
                }
              />
            </Link>
          </li>
          <li>
            <Link to='/BookMark'>
              <FontAwesomeIcon
                icon={faBookBookmark}
                className={location === '/grip_movie_app/BookMark' ? styles.iconActive : 'nomal'}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
