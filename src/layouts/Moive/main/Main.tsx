import styles from './Main.module.scss'

interface Props {
  children: React.ReactNode
  mainTitle?: string
}

const Main = ({ children, mainTitle}: Props) => {
  return (
    <main className={styles.mainContainer}>
      <h1>{mainTitle}</h1>
      <div className={styles.mainWapper}>{children}</div>
    </main>
  )
}

export default Main
