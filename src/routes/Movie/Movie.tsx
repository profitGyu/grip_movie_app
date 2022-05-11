import Layout from 'layouts/Moive/Layout'
import SearchBar from 'components/Search/SearchBar'
import Main from 'layouts/Moive/main/Main'
import { Suspense } from 'react'

const Movie = () => {
  return (
    <Layout>
      <SearchBar />
      <Suspense fallback={<div>Loding...</div>}>
        <Main />
      </Suspense>
    </Layout>
  )
}
export default Movie
