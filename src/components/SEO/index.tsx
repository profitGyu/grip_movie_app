import Helmet from 'react-helmet'

import React from 'react'

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
