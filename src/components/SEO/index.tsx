import Helmet from 'react-helmet'

interface titleType {
  title: string
}

const SEO = ({ title }: titleType) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default SEO
