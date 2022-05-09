import '../../assets/fontawsome/index'
import styles from './SearchBar.module.scss'
import { faMagnifyingGlass as searchIcon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { movieSearchState } from 'atom'

const SearchBar = ({ onChang }: any) => {
  const setSearch = useSetRecoilState(movieSearchState)
  const [value, setValue] = useState<string>('')

  const inputChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearch(value)
  }

  return (
    <section className={styles.searchbarContainer}>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={inputChangeHandle} value={value} />
          <button type='submit'>
            <FontAwesomeIcon icon={searchIcon} size='lg' />
          </button>
        </form>
      </div>
    </section>
  )
}

export default SearchBar
