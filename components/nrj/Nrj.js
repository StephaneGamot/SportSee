import React from 'react'
import styles from './Nrj.module.css'

export default function nrj({children}) {
  return (
    <div className={styles.nrjCard}>{children}</div>
  )
}
