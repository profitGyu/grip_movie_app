import '../../assets/fontawsome/index'
import styles from './SearchBar.module.scss'
import { faMagnifyingGlass as searchIcon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { movieSearchState, moviePageState, searchedAllMovie } from 'atom'
import { useSearchParams } from 'react-router-dom'

const SearchBar = () => {
  const setSearch = useSetRecoilState(movieSearchState)
  const setPage = useSetRecoilState(moviePageState)
  const setSearched = useSetRecoilState(searchedAllMovie)
  const [value, setValue] = useState<string>('')

  const inputChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    setSearched([])
    setSearch(value.trim())
    setPage(1)
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
