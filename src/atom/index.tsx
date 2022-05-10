import { atom, selector } from 'recoil'

import { getMovieApi } from 'services/moive'
import { Imoive } from 'types/movie'

export const moviePageState = atom<number>({
  key: '#moviePageState',
  default: 1,
})

export const movieSearchState = atom<string>({
  key: '#movieSearchState',
  default: '',
})

export const movieResultState = selector<Imoive | null>({
  key: '#movieResultState',
  get: async ({ get }) => {
    const search = get(movieSearchState)
    const currentPage = get(moviePageState)

    if (!search) {
      return null
    }

    const res = await getMovieApi({ search, page: currentPage })
    return res.data
  },
})
