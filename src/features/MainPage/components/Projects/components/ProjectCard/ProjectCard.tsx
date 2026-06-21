import { useMediaQuery } from '@uidotdev/usehooks'
import { Typography } from '../../../../../../shared/components/Typography'
import styles from './index.module.css'
import { Link } from '../../../../../../components/Link'

interface ProjectCardProps {
  id: string
  img: string
  name: string
  description: string
  path: string
}

export const ProjectCard = ({
  id,
  img,
  name,
  description,
  path,
}: ProjectCardProps) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 620px)')

  return (
    <div className={styles.project}>
      <div className={styles.containerAbout}>
        <img
          className={styles.projectImg}
          src={img}
          alt="screenshot of pet-care project"
        />
        <section className={styles.projectDescription}>
          <Link href={path}>
            <Typography
              variant={isSmallDevice ? 'body1' : 'heading4'}
              weight="semi-bold"
              className={styles.header}
              data-color={id}
            >
              {name}
            </Typography>
          </Link>
          <Typography
            variant={isSmallDevice ? 'body5' : 'body3'}
            weight="regular"
            className={styles.paragraph}
          >
            {description}
          </Typography>
          {/* <Typography
            variant={isSmallDevice ? 'body4' : 'body2'}
            weight="regular"
            style="italic"
            className={styles.paragraph}
          >
            Technics used in the project:
          </Typography>
          <ul className={styles.technologies}>
            {technologies.map((technology) => {
              return (
                <Typography
                  key={technology}
                  as="li"
                  variant={isSmallDevice ? 'body5' : 'body2'}
                  weight="regular"
                  style="italic"
                >
                  {technology}
                </Typography>
              )
            })}
          </ul> */}
        </section>
      </div>
      <a href={path} className={styles.btnMore} data-color={id}>
        View more about {name} →
      </a>
    </div>
  )
}
