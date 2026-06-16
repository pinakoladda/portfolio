import { PROJECTS } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import styles from './index.module.css'
import { Typography } from '../../../../shared/components/Typography'

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <Typography as="header" variant="heading2" weight="medium">
        My Projects:
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
              technologes={project.technologes}
            />
          )
        })}
      </div>
    </section>
  )
}
