import { Typography } from '../../shared/components/Typography'
import styles from './index.module.css'
import { Link } from '../../components/Link'
import { Header } from '../../components/Header'
import { LinkedInIconSquare } from '../../shared/images/LinkedInIconSquare'
import { GitHubIconSquare } from '../../shared/images/GitHubIconSquare'
import { TelegramIconSquare } from '../../shared/images/TelegramIconSquare'
import { CursorFilledIcon } from '../../shared/images/CursorFilledIcon'
import { MailIcon } from '../../shared/images/MailIcon'

export const Contacts = () => {
  return (
    <main className={styles.contactsPage}>
      <Header page="contacts" />
      <Typography
        className={styles.heading}
        as="h4"
        variant="heading4"
        weight="regular"
      >
        Interested in working together? Let's get in touch.
      </Typography>
      <section className={styles.contacts}>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/nina-koliada-20b714404/"
        >
          <LinkedInIconSquare />
          <Typography variant="body1" weight="regular">
            LinkedIn
          </Typography>
        </Link>
        <Link className={styles.link} href="https://github.com/pinakoladda">
          <GitHubIconSquare />
          <Typography variant="body1" weight="regular">
            GitHub
          </Typography>
        </Link>
        <Link className={styles.link} href="https://t.me/pinakoladda">
          <TelegramIconSquare />
          <Typography variant="body1" weight="regular">
            Telegram
          </Typography>
        </Link>
      </section>
      <Link className={styles.email} href="mailto:ninanina1519@gmail.com">
        <MailIcon />
        <Typography variant="body1" weight="regular">
          ninanina1519@gmail.com
        </Typography>
        <CursorFilledIcon />
      </Link>
    </main>
  )
}
