import { getImageUrl } from "../../utils"
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
      <footer className={styles.container} id="contact">
          <div className={styles.text}>
              <h2>
                  Contact
              </h2>
              <p>Feel free to reach out!</p>
          </div>
          <ul className={styles.links}>
              <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
              <a href="mailto:iancufabian45@gmail.com">iancufabian45@gmail.com</a>
              </li >
              <li className={styles.link}>
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinIcon" />
              <a href="https://www.linkedin.com/in/fabian-iancu-881535283/">www.linkedin.com/in/fabian-iancu</a>
              </li>
              <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
              <a href="https://github.com/Iancu-Fabian">github.com/Iancu-Fabian</a>
              </li>
          </ul>
    </footer>
  )
}
