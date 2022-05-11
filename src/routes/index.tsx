import Movie from 'routes/Movie/Movie'
import BookMark from 'routes/Movie/BookMark'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movie />} />
          <Route path='/bookmark' element={<BookMark />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
