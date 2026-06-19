import { useMediaQuery } from '@uidotdev/usehooks'
import { Typography } from '../../../../shared/components/Typography'
import styles from './index.module.css'

export const About = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 620px)')

  return (
    <section className={styles.aboutMe} id="AboutMe">
      <Typography
        className={styles.heading}
        as="h3"
        variant={isSmallDevice ? 'body1' : 'heading3'}
        weight="medium"
      >
        About me
      </Typography>
      <Typography
        className={styles.paragraph}
        variant={isSmallDevice ? 'body4' : 'body1'}
        weight="regular"
      >
        Hi, I'm Nina, a Junior Frontend Developer currently based in Warsaw.
      </Typography>
      <Typography
        className={styles.paragraph}
        variant={isSmallDevice ? 'body4' : 'body1'}
        weight="regular"
      >
        My tech stack includes React, JavaScript, TypeScript, HTML, CSS,
        Next.js, Node.js, Git, and MongoDB.
      </Typography>
      <Typography
        className={styles.paragraph}
        variant={isSmallDevice ? 'body4' : 'body1'}
        weight="regular"
      >
        I have experience building responsive and adaptive websites, Single Page
        Applications (SPAs), and multi-page web applications.
      </Typography>
      <Typography
        className={styles.paragraph}
        variant={isSmallDevice ? 'body4' : 'body1'}
        weight="regular"
      >
        I have built projects from scratch, worked with existing REST APIs, and
        created custom API endpoints to enable seamless frontend-backend
        communication.
      </Typography>
      <Typography
        className={styles.paragraph}
        variant={isSmallDevice ? 'body4' : 'body1'}
        weight="regular"
      >
        I am familiar with the software development lifecycle and version
        control using Git.
      </Typography>
      <Typography
        className={styles.paragraph}
        variant={isSmallDevice ? 'body4' : 'body1'}
        weight="regular"
      >
        I enjoy turning ideas into real products and continuously improving my
        skills.
      </Typography>
      <Typography
        className={styles.paragraph}
        variant={isSmallDevice ? 'body4' : 'body1'}
        weight="regular"
      >
        I'm currently looking for opportunities to grow as a developer,
        collaborate with experienced teams, and contribute to meaningful
        products.
      </Typography>
    </section>
  )
}
