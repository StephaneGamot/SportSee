import React from 'react'
import styles from './Energie.module.css'

export default function Energie({children }) {
  return (
    <div className={styles.energieCard}>{children}</div>
  )
}
