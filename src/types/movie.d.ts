export interface Imoive {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface IResult {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IBookMark extends IResult {
  bookmarkId: number
}

interface IGenreRsult {
  genres: Genre[]
}

interface IGenre {
  id: number
  name: string
}
