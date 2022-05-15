import Movie from 'routes/Movie/Search'
import BookMark from 'routes/Movie/BookMark'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './App.module.scss'

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter basename='/grip_movie_app'>
        <Routes>
          <Route path='/' element={<Movie />}>
            <Route path=':search' element={<Movie />} />
          </Route>
          <Route path='bookmark' element={<BookMark />} />
          <Route path='*' element={<div>잘못된 접근입니다.</div>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
