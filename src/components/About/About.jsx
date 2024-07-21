import React from 'react'
import { getImageUrl } from "../../utils.js";
import styles from "./About.module.css";

export const About = () => {
  return (
      <section className={styles.container} id="about">
          <h2 className={styles.title}>
              About
          </h2>
          <div className={styles.content}>
              <img className={styles.aboutImage} src={getImageUrl("about/etti.png")} alt="nothing" />

              <ul className={styles.aboutItems}>
                  <li className={styles.aboutItem}>
                      <img src={getImageUrl("about/booksIcon.png")} alt="icon" className={styles.icon} />
                      <div>
                  <h3 className={styles.aboutItemText}>Academic performance so far</h3>
                  <p>
                              GPA last semester: 9.22<br/>
                              GPA last year: 8.69

                  </p>
              </div>
                  </li>

                  
                  <li className={styles.aboutItem}>
                      <img src={getImageUrl("about/coursesIcon.png")} alt="icon" className={styles.icon}/>
                      <div>
                  <h3 className={styles.aboutItemText}>Relevant coursework</h3>
                  <p>
                      Data Structures and
Algorithms, OOP, Python
project, Java project (this
semester), Databases
(this semester)

                  </p>
              </div>
                  </li>


                  <li className={styles.aboutItem}>
                      <img src={getImageUrl("about/programmingIcon.png")} alt="icon" className={styles.icon}/>
                      <div>
                  <h3 className={styles.aboutItemText}>Interests</h3>
                  <p>
                      Learning new technologies and advancing as a programmer.

                  </p>
              </div>
                  </li>
              </ul>
              
              <li>
                  
              </li>

          </div>
    </section>
  )
}

