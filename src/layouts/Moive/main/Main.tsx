import styles from './Main.module.scss'

interface Props {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainWapper}>{children}</div>
    </main>
  )
}

export default Main
