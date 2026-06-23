import { PROJECTS } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import { Typography } from '../../../../shared/components/Typography'
import { useMediaQuery } from '@uidotdev/usehooks'
import styles from './index.module.css'

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
              path={project.path}
            />
          )
        })}
      </div>

      <section className={styles.experience}>
        <Typography
          className={styles.heading}
          as="h3"
          variant={isSmallDevice ? 'body1' : 'heading3'}
          weight="medium"
        >
          Additional Experience
        </Typography>
        <Typography
          variant={isSmallDevice ? 'body4' : 'body1'}
          weight="regular"
        >
          Throughout my learning journey, I have worked on a wide range of
          applications, including social networking platforms, movie catalogs,
          pet adoption services, task management tools, and other projects that
          helped me strengthen my frontend development skills. <br />I am
          currently working on WishList, a project inspired by many of the
          concepts implemented in my other project Pet Care. Its primary goal is
          to deepen my experience with Next.js while building a fully functional
          application using modern frontend development practices.
        </Typography>
      </section>
    </section>
  )
}
