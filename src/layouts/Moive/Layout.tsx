import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.moive}>
        <Header />
        {children}
        <React.Suspense fallback={<div>Loding...</div>}>
          <Main />
        </React.Suspense>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
