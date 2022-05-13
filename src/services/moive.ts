import axios from 'axios'
import { Imoive, IGenreRsult } from 'types/movie'

const MOVIE_BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

interface Params {
  query: string
  page: number
}

export const getMovieAPI = (params: Params) =>
  axios.get<Imoive>(`${MOVIE_BASE_URL}/search/movie/`, {
    params: {
      ...params,
      api_key: API_KEY,
      language: 'ko-KR',
      include_adult: 'false',
    },
  })

export const getMovieGenreAPI = () =>
  axios.get<IGenreRsult>(`${MOVIE_BASE_URL}/genre/movie/list`, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR',
    },
  })
