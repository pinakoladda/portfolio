import { Typography } from '../../shared/components/Typography'
import { Link } from '../../components/Link'
import { Header } from '../../components/Header'
import { LinkedInIconSquare } from '../../shared/images/LinkedInIconSquare'
import { GitHubIconSquare } from '../../shared/images/GitHubIconSquare'
import { TelegramIconSquare } from '../../shared/images/TelegramIconSquare'
import { CursorFilledIcon } from '../../shared/images/CursorFilledIcon'
import { MailIcon } from '../../shared/images/MailIcon'
import { useMediaQuery } from '@uidotdev/usehooks'
import { DownloadIcon } from '../../shared/images/DownloadIcon'

import styles from './index.module.css'

export const ContactsPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 620px)')

  return (
    <main className={styles.contactsPage}>
      <Header page="contacts" />
      <Typography
        className={styles.heading}
        as="h4"
        variant={isSmallDevice ? 'body1' : 'heading4'}
        weight="regular"
      >
        Interested in working together? Let's get in touch.
      </Typography>
      <section className={styles.contacts}>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/nina-koliada/"
          target="_blank"
        >
          <LinkedInIconSquare />
          <Typography
            variant={isSmallDevice ? 'body3' : 'body1'}
            weight="regular"
          >
            LinkedIn
          </Typography>
        </Link>
        <Link
          className={styles.link}
          href="https://github.com/pinakoladda"
          target="_blank"
        >
          <GitHubIconSquare />
          <Typography
            variant={isSmallDevice ? 'body3' : 'body1'}
            weight="regular"
          >
            GitHub
          </Typography>
        </Link>
        <Link
          className={styles.link}
          href="https://t.me/pinakoladda"
          target="_blank"
        >
          <TelegramIconSquare />
          <Typography
            variant={isSmallDevice ? 'body3' : 'body1'}
            weight="regular"
          >
            Telegram
          </Typography>
        </Link>
      </section>
      <section className={styles.emailContainer}>
        <Link className={styles.email} href="mailto:pinnakoladda@gmail.com">
          <MailIcon />
          <Typography
            variant={isSmallDevice ? 'body3' : 'body1'}
            weight="regular"
          >
            pinnakoladda@gmail.com
          </Typography>
          <CursorFilledIcon />
        </Link>
      </section>
      <section className={styles.cvContainer}>
        <Link
          className={styles.cv}
          href="/portfolio/CV_Junior_Frontend_Developer_Nina_Koliada_Jun2026.pdf"
          target="_blank"
        >
          <Typography
            variant={isSmallDevice ? 'body4' : 'body2'}
            weight="regular"
          >
            Download resume
          </Typography>
          <DownloadIcon />
        </Link>
      </section>
    </main>
  )
}
