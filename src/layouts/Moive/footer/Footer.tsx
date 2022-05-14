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
            <Link to='/grip_movie_app'>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size='lg'
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
                size='lg'
                className={location === '/BookMark' ? styles.iconActive : 'nomal'}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
