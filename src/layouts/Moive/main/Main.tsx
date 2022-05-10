import { useRecoilValue, useSetRecoilState } from 'recoil'
import { movieResultState, moviePageState } from 'atom'
import MovieBox from 'components/Box/MovieBox'
import styles from './Main.module.scss'
import { useScroll } from 'react-use'
import { useEffect, useRef, useCallback, useState } from 'react'

const Main = () => {
  const movieList = useRecoilValue(movieResultState)
  const scrollRef = useRef<HTMLDivElement>(null)
  const setPage = useSetRecoilState(moviePageState)
  const [allMoive, setAllMoive] = useState([])

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0]
    if (target.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '15px',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (scrollRef.current) observer.observe(scrollRef.current)
  }, [handleObserver])

  return (
    <main className={styles.mainContainer}>
      {allMoive ? (
        <ul>
          {allMoive.map((item) => (
            <MovieBox item={item} />
          ))}
          <div ref={scrollRef} />
        </ul>
      ) : (
        <div>결과가 존재하지 않습니다.</div>
      )}
    </main>
  )
}

export default Main
