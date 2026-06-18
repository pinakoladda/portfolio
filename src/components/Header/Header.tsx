import { Typography } from '../../shared/components/Typography'
import { Link } from '../Link'
import styles from './index.module.css'

interface HeaderProps {
  page: 'main' | 'pet-care' | 'pet-store' | 'real-estate' | 'contacts'
}

export const Header = ({ page }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Typography
        className={styles.title}
        variant="heading2"
        weight="medium"
        data-color={page}
      >
        {page === 'main' && 'Portfolio'}
        {page === 'contacts' && 'Contacts'}

        {page === 'pet-care' && 'Pet-Care Project'}
        {page === 'pet-store' && 'Pet-Store Project'}
        {page === 'real-estate' && 'Real Estate Landing Project'}
      </Typography>
      {page === 'main' ? (
        <div className={styles.linkContainer}>
          <Link href="#AboutMe">
            <Typography variant="body3" weight="medium">
              About Me
            </Typography>
          </Link>
          <Link href="#Projects">
            <Typography variant="body3" weight="medium">
              Projects
            </Typography>
          </Link>
          <Link href="/contacts">
            <Typography variant="body3" weight="medium">
              Contacts
            </Typography>
          </Link>
        </div>
      ) : (
        <div className={styles.linkContainer}>
          <Link href="/">
            <Typography variant="body3" weight="medium">
              Main Page
            </Typography>
          </Link>
          <Link href="/contacts">
            <Typography variant="body3" weight="medium">
              Contacts
            </Typography>
          </Link>
          <Link href="/#Projects">
            <Typography variant="body3" weight="medium">
              Projects
            </Typography>
          </Link>
        </div>
      )}
    </header>
  )
}
