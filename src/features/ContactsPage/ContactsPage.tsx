import { Typography } from '../../shared/components/Typography'
import styles from './index.module.css'
import { Link } from '../../components/Link'
import { Header } from '../../components/Header'
import { LinkedInIconSquare } from '../../shared/images/LinkedInIconSquare'
import { GitHubIconSquare } from '../../shared/images/GitHubIconSquare'
import { TelegramIconSquare } from '../../shared/images/TelegramIconSquare'
import { CursorFilledIcon } from '../../shared/images/CursorFilledIcon'
import { MailIcon } from '../../shared/images/MailIcon'
import { useMediaQuery } from '@uidotdev/usehooks'

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
          href="https://www.linkedin.com/in/nina-koliada-20b714404/"
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
      <Link className={styles.email} href="mailto:ninanina1519@gmail.com">
        <MailIcon />
        <Typography
          variant={isSmallDevice ? 'body3' : 'body1'}
          weight="regular"
        >
          ninanina1519@gmail.com
        </Typography>
        <CursorFilledIcon />
      </Link>
    </main>
  )
}
