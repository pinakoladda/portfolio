import { useMediaQuery } from '@uidotdev/usehooks'
import { Typography } from '../../../../shared/components/Typography'
import styles from './index.module.css'

export const Experience = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 620px)')

  return (
    <section className={styles.experience}>
      <Typography
        as="h3"
        className={styles.heading}
        variant={isSmallDevice ? 'body1' : 'heading3'}
        weight="medium"
      >
        Education & Courses
      </Typography>
      <section className={styles.sectionCourse}>
        <Typography
          as="h4"
          variant={isSmallDevice ? 'body4' : 'heading4'}
          weight="medium"
        >
          1. The Joy of React — by Josh W. Comeau
        </Typography>
        <Typography variant="body5" weight="regular" style="italic">
          December 2025 - May 2026
        </Typography>
        <Typography
          variant={isSmallDevice ? 'body4' : 'body2'}
          weight="regular"
        >
          An interactive React.js course focused on building a deep
          understanding of React and applying modern development best practices.
          The curriculum covered React and JavaScript Fundamentals, State
          Management, React Hooks, Component API Design, and Next.js. The course
          also included hands-on exercises and independent projects that
          reinforced practical skills and real-world problem-solving.
        </Typography>
      </section>
      <section className={styles.sectionCourse}>
        <Typography
          as="h4"
          variant={isSmallDevice ? 'body4' : 'heading4'}
          weight="medium"
        >
          2. CSS for JavaScript Developers — by Josh W. Comeau
        </Typography>
        <Typography variant="body5" weight="regular" style="italic">
          December 2025 - June 2026
        </Typography>
        <Typography
          variant={isSmallDevice ? 'body4' : 'body2'}
          weight="regular"
        >
          An advanced CSS course that goes beyond the fundamentals, focusing on
          how CSS works under the hood and how to build scalable, maintainable
          user interfaces. Topics included modern layout techniques, responsive
          design, animations, and best practices for writing efficient,
          production-ready CSS.
        </Typography>
      </section>
      <section className={styles.sectionCourse}>
        <Typography
          as="h4"
          variant={isSmallDevice ? 'body4' : 'heading4'}
          weight="medium"
        >
          3. Web Developer Program — Yandex Practicum
        </Typography>
        <Typography variant="body5" weight="regular" style="italic">
          September 2021 - June 2022
        </Typography>
        <Typography
          variant={isSmallDevice ? 'body4' : 'body2'}
          weight="regular"
        >
          A comprehensive 10-month web development bootcamp covering HTML, CSS,
          JavaScript, and React. The program included multiple large-scale
          projects and a final graduation project, all reviewed and evaluated by
          mentors. In addition to technical skills, the course emphasized
          industry-standard workflows, code reviews, and practical development
          experience.
        </Typography>
      </section>
    </section>
  )
}
