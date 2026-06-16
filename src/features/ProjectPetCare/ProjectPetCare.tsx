import { Header } from '../../components/Header'
import { Typography } from '../../shared/components/Typography'
import { ImagesCarousel } from '../../components/ImagesCarousel'
import { PET_CARE_IMAGES } from './data/images'
import styles from './index.module.css'

export const ProjectPetCare = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Typography variant="heading2" weight="medium">
        Pet-Care Project
      </Typography>
      <section className={styles.aboutProject}>
        <Typography variant="body1" weight="regular">
          Pet Care is a personal project created primarily to practice and
          improve my front-end development skills. The idea came from a
          real-life need: I wanted a convenient way to store and monitor
          important information about my dog 🐶. The main goal of the project
          was to create a centralized space for pet owners to manage essential
          pet information and track changes in their pet’s health over time. My
          focus was on building a clean, intuitive interface that makes daily
          use effortless while ensuring quick access to important data.
        </Typography>
      </section>
      <section className={styles.projectImages}>
        <ImagesCarousel images={PET_CARE_IMAGES} />
        <section className={styles.technologies}>
          <Typography variant="heading4" weight="medium">
            Technologies used in this project:
          </Typography>
          <ul>
            <Typography as="li" variant="body2" weight="medium">
              React.JS
            </Typography>
            <Typography as="li" variant="body2" weight="medium">
              JavaScript
            </Typography>
            <Typography as="li" variant="body2" weight="medium">
              CSS
            </Typography>
            <Typography as="li" variant="body2" weight="medium">
              HTML
            </Typography>
            <Typography as="li" variant="body2" weight="medium">
              Adaptive design
            </Typography>
          </ul>
        </section>
      </section>
    </main>
  )
}
