import Layout from 'layouts/Moive/Layout'
import SearchBar from 'components/Search/SearchBar'
import _ from 'lodash'

import { useRecoilState, useRecoilValue } from 'recoil'
import { moviePageState, movieSearchState, searchedAllMovie } from 'atom'
import { useEffect, useRef, useCallback, useState, Suspense } from 'react'

import { getMovieAPI } from 'services/moive'

import { EmptyResult } from 'components/Search/EmptyResult'
import MovieBox from 'components/Box/MovieBox'
import SEO from 'components/SEO'

const Movie = () => {
  const search = useRecoilValue(movieSearchState)
  const [allMoive, setAllMoive] = useRecoilState(searchedAllMovie)
  const [currentPage, setCurrentPage] = useRecoilState(moviePageState)

  const [total, setTotal] = useState<number>(0)
  const [totalCount, setTotalCount] = useState<number>(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const getMovie = useCallback(
    async (targetPage: number) => {
      setIsLoaded(true)
      getMovieAPI({
        query: search,
        page: targetPage,
      }).then((resp) => {
        if (resp.data.results === []) return
        setAllMoive((prev) => {
          return _.uniqBy(prev.concat(resp.data.results), 'id')
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
      setTotalCount(resp.data.total_results)
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
      <SEO title='Search' />
      <SearchBar />
      {totalCount > 0 ? <h1>총 {totalCount}개의 결과물</h1> : null}
      {allMoive.length ? (
        <ul>
          {allMoive.map((item) => (
            <MovieBox item={item} key={`moive-list+${item.id}`} />
          ))}
          <Suspense fallback={<div>Loding...</div>}>
            <div ref={scrollRef} style={{ height: '50px' }}>
              {isLoaded && '로딩중'}
            </div>
          </Suspense>
        </ul>
      ) : (
        <EmptyResult content='검색 결과가 없습니다.' />
      )}
    </Layout>
  )
}
export default Movie
