import React, { ReactNode } from 'react'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
const Layout = (props : { children : ReactNode }) => {
  return (

    <div className={styles.container}>
        <Nav/>
        <main className={styles.main}>
            {props.children}
        </main>
    </div>
  )
}

export default Layout