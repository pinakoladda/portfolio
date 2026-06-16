import { Typography } from '../../../../../../shared/components/Typography'
import styles from './index.module.css'

interface ProjectCardProps {
  id: string
  img: string
  name: string
  description: string
  technologes: string[]
}

export const ProjectCard = ({
  id,
  img,
  name,
  description,
  technologes,
}: ProjectCardProps) => {
  return (
    <div className={styles.project}>
      <div className={styles.containerAbout}>
        <img
          className={styles.projectImg}
          src={img}
          alt="screenshot of pet-care project, main page"
        />
        <section className={styles.projectDescription}>
          <Typography
            variant="heading4"
            weight="medium"
            className={styles.header}
            data-color={id}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            weight="regular"
            className={styles.paragraph}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            weight="regular"
            style="italic"
            className={styles.paragraph}
          >
            Technologies used in the project:
          </Typography>
          <ul className={styles.technologes}>
            {technologes.map((technology) => {
              return (
                <Typography
                  key={technology}
                  as="li"
                  variant="body2"
                  weight="regular"
                  style="italic"
                >
                  {technology}
                </Typography>
              )
            })}
          </ul>
        </section>
      </div>
      <a href="/project-pet-care" className={styles.btnMore}>
        View more about {name} →
      </a>
    </div>
  )
}
