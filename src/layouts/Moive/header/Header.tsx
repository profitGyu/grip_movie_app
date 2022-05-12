import { useMount } from 'hooks'
import styles from './Header.module.scss'
import useBookMarkCore from 'hooks/moives/useBookmarkCore'

const Header = () => {
  const { bookmarkIdListFirstUpdate } = useBookMarkCore()

  useMount(() => {
    bookmarkIdListFirstUpdate()
  })
  return (
    <header className={styles.headerContainer}>
      <div>logs</div>
    </header>
  )
}

export default Header
