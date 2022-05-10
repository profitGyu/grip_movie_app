import axios from 'axios'
import { Imoive } from 'types/movie'

const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/search/movie'

const API_KEY = '37819790f34c4eaa4a79f8c47e794ab0'

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