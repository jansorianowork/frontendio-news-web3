import React from 'react'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
const Nav = () => {
  return (
    <nav className={styles.nav}><ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/new'>New</Link>
      </li>
      <li>
        <Link href='/popular'>Popular</Link>
      </li>
      <li>
        <Link href='/trending'>Trending</Link>
      </li>
      <li>
        <Link href='/categories'>Categories</Link>
      </li>
      </ul></nav>
  )
}

export default Nav