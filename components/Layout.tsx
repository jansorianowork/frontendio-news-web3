import React, { ReactNode } from 'react'
import styles from '../styles/Layout.module.css'
const Layout = (props : { children : ReactNode }) => {
  return (
    <div className={styles.container}>

        <main className={styles.main}>
            {props.children}
        </main>
    </div>
  )
}

export default Layout