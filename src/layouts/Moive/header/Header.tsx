import { useMount } from 'hooks'
import styles from './Header.module.scss'
import useBookMarkCore from 'hooks/moives/useBookmarkCore'
import logo from '../../../assets/svgs/gripLogo3.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const { bookmarkIdListFirstUpdate } = useBookMarkCore()

  useMount(() => {
    bookmarkIdListFirstUpdate()
  })

  return (
    <header className={styles.headerContainer}>
      <div>
        <Link to='/grip_movie_app'>
          <img src={logo} alt='로고' />
        </Link>
      </div>
    </header>
  )
}

export default Header
