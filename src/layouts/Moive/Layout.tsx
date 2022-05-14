import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'
import React, { Suspense } from 'react'

interface Props {
  children: React.ReactNode
  mainTitle?: string
}

const Layout = ({ children, mainTitle }: Props) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.moive}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Main mainTitle ={mainTitle}>{children}</Main>
        </Suspense>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
