import axios from 'axios'
import { Imoive } from 'types/movie'

const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/search/movie/'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

interface Params {
  query: string
  page: number
}

export const getMovieAPI = (params: Params) =>
  axios.get<Imoive>(`${MOVIE_BASE_URL}`, {
    params: {
      ...params,
      api_key: API_KEY,
      language: 'ko-KR',
      include_adult: 'false',
    },
  })

