import '../../assets/fontawsome/index'
import styles from './SearchBar.module.scss'
import { faMagnifyingGlass as searchIcon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { movieSearchState, moviePageState, searchedAllMovie } from 'atom'
import { useSearchParams } from 'react-router-dom'
import { Console } from 'console'

const SearchBar = () => {
  const setSearch = useSetRecoilState(movieSearchState)
  const setPage = useSetRecoilState(moviePageState)
  const setSearched = useSetRecoilState(searchedAllMovie)
  
  const [value, setValue] = useState<string>('')

  const [searchParams, setSearchParams] = useSearchParams()

  const inputChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const currentSearch = searchParams.get('query')

    console.log("teste")
    if (currentSearch === value) return

    setSearch(value.trim())
    setSearched([])
    setPage(1)
    setSearchParams({ query: value })
  }

  return (
    <section className={styles.searchbarContainer}>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={inputChangeHandle} value={value} />
        <button type='submit'>
          <FontAwesomeIcon icon={searchIcon} size='2x' />
        </button>
      </form>
    </section>
  )
}

export default SearchBar
