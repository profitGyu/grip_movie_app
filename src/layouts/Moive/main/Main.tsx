import styles from './Main.module.scss'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { movieResultState, moviePageState } from 'atom'
import MovieBox from 'components/Box/MovieBox'
import { useEffect, useRef, useCallback, useState } from 'react'
import { useMount } from 'react-use'
import { IResult } from 'types/movie'

const Main = () => {
  const movieList = useRecoilValue(movieResultState)
  const [page, setPage] = useRecoilState(moviePageState)

  const [allMoive, setAllMoive] = useState<IResult[]>()
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleObserver = useCallback(
    (entries: any) => {
      const target = entries[0]
      if (target.isIntersecting) {
        if (page === 1) {
          setAllMoive(movieList?.results)
        } else {
          setPage((prev) => prev + 1)
        }
      }
    },
    [setPage, movieList]
  )

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
      {movieList ? (
        <ul>
          {movieList?.results.map((item) => (
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
