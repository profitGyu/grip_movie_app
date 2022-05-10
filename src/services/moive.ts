import axios from 'axios'
import { Imoive } from 'types/movie'

const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/search/movie'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

interface Params {
  search: string
  page: number
}

export const getMovieApi = (parmas: Params) => {
  try {
    const rep = axios.get<Imoive>(
      `${MOVIE_BASE_URL}/?api_key=${API_KEY}&language=ko-KR&query=${parmas.search}&page=${parmas.page}&include_adult=false`,
      {}
    )
    return rep
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${MOVIE_BASE_URL})': ${error}`)
  }
}
