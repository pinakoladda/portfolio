import { Typography } from '../../shared/components/Typography'
import { CursorFilledIcon } from '../../shared/images/CursorFilledIcon'
import { GitHubIcon } from '../../shared/images/GitHubIcon'
import { LinkedInIcon } from '../../shared/images/LinkedInIcon'
import { TelegramIcon } from '../../shared/images/TelegramIcon'
import { Link } from '../Link'
import styles from './index.module.css'

interface FooterProps {
  page: 'main' | 'pet-care' | 'pet-store'
}

export const Footer = ({ page }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <section className={styles.sectionContacts}>
        <Typography variant="body2" weight="medium">
          Navigation
        </Typography>
        <Link
          className={styles.link}
          href={page === 'main' ? '#MainPage' : '/'}
        >
          <CursorFilledIcon />
          <Typography variant="body3" weight="regular">
            Main Page
          </Typography>
        </Link>
        <Link className={styles.link} href="#AboutMe">
          <CursorFilledIcon />
          <Typography variant="body3" weight="regular">
            About Me
          </Typography>
        </Link>
        <Link
          className={styles.link}
          href={page === 'main' ? '#Projects' : '/'}
        >
          <CursorFilledIcon />
          <Typography variant="body3" weight="regular">
            Projects
          </Typography>
        </Link>
      </section>
      <section className={styles.sectionSlogan}>
        <Typography variant="body1" weight="medium">
          Nina Koliada
        </Typography>
        <Typography variant="body3" weight="regular" style="italic">
          Junior Frontend Developer
        </Typography>
        <Typography variant="body3" weight="regular">
          Let's work together!
        </Typography>
      </section>
      <section className={styles.sectionContacts}>
        <Typography variant="body2" weight="medium">
          Contact me
        </Typography>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/nina-koliada-20b714404/"
        >
          <LinkedInIcon />
          <Typography variant="body3" weight="regular">
            LinkedIn
          </Typography>
        </Link>
        <Link className={styles.link} href="https://github.com/pinakoladda">
          <GitHubIcon />
          <Typography variant="body3" weight="regular">
            GitHub
          </Typography>
        </Link>
        <Link className={styles.link} href="https://t.me/pinakoladda">
          <TelegramIcon />
          <Typography variant="body3" weight="regular">
            Telegram
          </Typography>
        </Link>
      </section>
    </footer>
  )
}
