import { PROJECTS } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import styles from './index.module.css'
import { Typography } from '../../../../shared/components/Typography'

export const Projects = () => {
  return (
    <section className={styles.projects} id="Projects">
      <Typography as="h3" variant="heading3" weight="medium">
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
