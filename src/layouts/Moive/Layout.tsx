import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.moive}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
