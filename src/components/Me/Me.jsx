import React from 'react'
import styles from "./Me.module.css"
import { getImageUrl } from '../../utils'

export const Me = () => {
  return (
      <section className={styles.container}>
          <div className={styles.content}>
              <h1 className={styles.title}>Iancu Fabian</h1>
        <p className={styles.description}>I'm a second year Electronics student </p>
        <p className={styles.description}>And I like doing things properly and efficiently.</p>
              <a href="mailto:iancufabian45@gmail.com" className={styles.contactBtn}>Email Me</a>

          </div>
          <img src={getImageUrl("me/poza.png")} alt="img" className={styles.MeImg}></img>
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />
    </section>
  )
}

