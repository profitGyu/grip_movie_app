import React from 'react'
import { useRecoilValue } from 'recoil'
import { movieResultState } from 'atom'

const Main = () => {
  const movieList = useRecoilValue(movieResultState)
  return (
    <main>
      {movieList ? (
        <ul>
          {movieList.results.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <div>결과가 존재하지 않습니다.</div>
      )}
    </main>
  )
}

export default Main
