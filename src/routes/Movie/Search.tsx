import Layout from 'layouts/Moive/Layout'
import SearchBar from 'components/Search/SearchBar'

import { useRecoilState, useRecoilValue } from 'recoil'
import { moviePageState, movieSearchState, searchedAllMovie } from 'atom'
import MovieBox from 'components/Box/MovieBox'
import { useEffect, useRef, useCallback, useState, Suspense } from 'react'
import { getMovieAPI } from 'services/moive'

const Movie = () => {
  const search = useRecoilValue(movieSearchState)
  const [allMoive, setAllMoive] = useRecoilState(searchedAllMovie)
  const [currentPage, setCurrentPage] = useRecoilState(moviePageState)

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
    [search, setAllMoive]
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
  }, [search, setAllMoive])

  const onIntersect = useCallback(
    async ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting && !isLoaded) {
        observer.unobserve(entry.target)
        if (total > currentPage) {
          const nextPage = currentPage + 1
          setCurrentPage(nextPage)
          getMovie(nextPage)
          observer.observe(entry.target)
        }
      }
    },
    [currentPage, getMovie, isLoaded, setCurrentPage, total]
  )

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }
    const observer = new IntersectionObserver(onIntersect, option)
    if (scrollRef.current) observer.observe(scrollRef.current)
    return () => observer.disconnect()
  }, [onIntersect])
  return (
    <Layout>
      <SearchBar />

      <h2>{total > 0 ? total : null}</h2>

      {allMoive.length !== 0 ? (
        <ul>
          {allMoive.map((item,index) => (
            <MovieBox item={item} key={`moive-list+${index}`} />
          ))}
          <Suspense fallback={<div>Loding...</div>}>
            <div ref={scrollRef} style={{ height: '50px' }}>
              {isLoaded && '로딩중'}
            </div>
          </Suspense>
        </ul>
      ) : (
        <div>결과가 존재하지 않습니다.</div>
      )}
    </Layout>
  )
}
export default Movie
