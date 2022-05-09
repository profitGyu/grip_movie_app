import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Movie from 'routes/Movie/Movie'
import BookMark from 'routes/Movie/BookMark'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/bookmark' element={<BookMark />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
)
