import styles from './Main.module.scss'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { movieResultState, moviePageState, movieSearchState, searchedAllMovie } from 'atom'
import MovieBox from 'components/Box/MovieBox'
import { useEffect, useRef, useCallback, useState } from 'react'
import { IResult } from 'types/movie'
import { getMovieAPI } from 'services/moive'
import { observe } from 'react-intersection-observer'

const Main = () => {
  const search = useRecoilValue(movieSearchState)
  const [allMoive, setAllMoive] = useRecoilState(searchedAllMovie)
  const [currentPage, setCurrentPage] = useRecoilState(moviePageState)
  const movieList = useRecoilValue(movieResultState)
  const [total, setTotal] = useState<number>(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const getMovie = useCallback(
    async (test: number) => {
      setIsLoaded(true)
      getMovieAPI({
        query: search,
        page: test,
      }).then((resp) => {
        if (resp.data.results === []) return
        setAllMoive((prev) => {
          return prev.concat(resp.data.results)
        })
      })
      setIsLoaded(false)
    },
    [search]
  )

  useEffect(() => {
    if (!search) return
    getMovieAPI({
      query: search,
      page: 1,
    }).then((resp) => {
      setAllMoive(resp.data.results)
      setTotal(resp.data.total_pages)
    })
  }, [search])

  const onIntersect = async ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target)
      if (total > currentPage) {
        setCurrentPage((prev) => prev + 1)
        await getMovie(currentPage +1 )
        observer.observe(entry.target)
      }
    }
  }

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }
    const observer = new IntersectionObserver(onIntersect, option)
    if (scrollRef.current) observer.observe(scrollRef.current)
    return () => observer.disconnect()
  }, [scrollRef.current, onIntersect])

  return (
    <main className={styles.mainContainer}>
      <h1>{total}</h1>
      {allMoive.length !== 0 ? (
        <ul>
          {allMoive.map((item, index) => (
            <MovieBox item={item} key={`test+${index}`} />
          ))}
          <div ref={scrollRef} style={{ height: '50px' }}>
            {isLoaded && '로딩중'}
          </div>
        </ul>
      ) : (
        <div>결과가 존재하지 않습니다.</div>
      )}
    </main>
  )
}

export default Main
