import { useMediaQuery } from '@uidotdev/usehooks'
import { Typography } from '../../../../shared/components/Typography'
import { Link } from '../../../../components/Link'
import { DownloadIcon } from '../../../../shared/images/DownloadIcon'
import styles from './index.module.css'

export const About = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 620px)')

  return (
    <main>
      <section className={styles.aboutMe} id="AboutMe">
        <div className={styles.container}>
          <Typography
            className={styles.heading}
            as="h3"
            variant={isSmallDevice ? 'body1' : 'heading3'}
            weight="medium"
          >
            About me
          </Typography>
        </div>
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
          My tech stack includes{' '}
          <b>
            {' '}
            React, JavaScript, TypeScript, HTML, CSS, Next.js, Node.js, Git, and
            MongoDB{' '}
          </b>
          .
        </Typography>
        <Typography
          className={styles.paragraph}
          variant={isSmallDevice ? 'body4' : 'body1'}
          weight="regular"
        >
          I have experience building responsive and adaptive websites, single
          page applications and multi-page web applications.
        </Typography>
        <Typography
          className={styles.paragraph}
          variant={isSmallDevice ? 'body4' : 'body1'}
          weight="regular"
        >
          I have built projects from scratch, worked with existing REST APIs,
          and created custom API endpoints to enable seamless frontend-backend
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
      <section className={styles.cvContainer}>
        <Link
          className={styles.cv}
          href="/CV_Junior_Frontend_Developer_Nina_Koliada_Jun2026.pdf"
          target="_blank"
        >
          <Typography
            variant={isSmallDevice ? 'body5' : 'body3'}
            weight="medium"
          >
            Download resume
          </Typography>
          <DownloadIcon width="18" height="18" />
        </Link>
      </section>
    </main>
  )
}
