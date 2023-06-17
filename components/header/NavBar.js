import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'


export default function NavBar() {
  return (
    <div className={styles.nav} >
<Link href="/" className={styles.navLink} >Accueil</Link>
<Link href="/" className={styles.navLink} >Profil</Link>
<Link href="/" className={styles.navLink} >Réglage</Link>
<Link href="/" className={styles.navLink} >Communauté</Link>

    </div>
  )
}
