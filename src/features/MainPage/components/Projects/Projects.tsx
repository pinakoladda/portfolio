import { PROJECTS } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import styles from './index.module.css'
import { Typography } from '../../../../shared/components/Typography'
import { useMediaQuery } from '@uidotdev/usehooks'

export const Projects = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 620px)')

  return (
    <section className={styles.projects} id="Projects">
      <Typography
        as="h3"
        variant={isSmallDevice ? 'body1' : 'heading3'}
        weight="medium"
        className={styles.heading}
      >
        My Projects
      </Typography>
      <div className={styles.projectsContainer}>
        {PROJECTS.map((project) => {
          return (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              img={project.image}
              technologies={project.technologies}
              path={project.path}
            />
          )
        })}
      </div>
    </section>
  )
}
