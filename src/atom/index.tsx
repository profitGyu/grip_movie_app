import { atom, selector } from 'recoil'
import { getMovieAPI } from 'services/moive'
import { IBookMark, Imoive, IResult } from 'types/movie'

export const moviePageState = atom<number>({
  key: '#moviePageState',
  default: 1,
})

export const movieSearchState = atom<string>({
  key: '#movieSearchState',
  default: '',
})

export const searchedAllMovie = atom<IResult[]>({
  key: '#searchedAllMovie',
  default: [],
})

export const bookmarkList = atom<IBookMark[]>({
  key: '#bookmarkMovie',
  default: [],
})

export const bookmarkIdList = atom<Array<number>>({
  key: "#bookmarkList",
  default: [],
})

// export const movieResultState = selector<Imoive | null>({
//   key: '#movieResultState',
//   get: async ({ get }) => {
//     const search = get(movieSearchState)
//     const currentPage = get(moviePageState)

//     if (!search) {
//       return null
//     }

//     try {
//       const response = await getMovieAPI({ query: search, page: currentPage })
//       return response.data
//     } catch (error) {
//       throw new Error(`Error in 'axiosGetJsonData()': ${error}`)
//     }
//   },
// })
