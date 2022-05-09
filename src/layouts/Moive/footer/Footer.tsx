import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className={styles.footerContainer}>
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
          </Link>
        </li>
        <li>
          <Link to="/BookMark">
            <FontAwesomeIcon icon={faStar} size='lg' />
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
)

export default Footer
