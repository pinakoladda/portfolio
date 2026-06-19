import { useMediaQuery } from '@uidotdev/usehooks'
import { Typography } from '../../shared/components/Typography'
import { Link } from '../Link'
import styles from './index.module.css'

interface HeaderProps {
  page:
    | 'main'
    | 'pet-care'
    | 'pet-store'
    | 'real-estate'
    | 'contacts'
    | 'projects'
}

export const Header = ({ page }: HeaderProps) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 620px)')

  return (
    <header className={styles.header}>
      <Typography
        className={styles.title}
        variant={isSmallDevice ? 'heading4' : 'heading2'}
        weight="bold"
        data-color={page}
      >
        {page === 'main' && 'Portfolio'}
        {page === 'contacts' && 'Contacts'}
        {page === 'projects' && 'Projects'}

        {page === 'pet-care' && 'Pet-Care'}
        {page === 'pet-store' && 'Pet-Store'}
        {page === 'real-estate' && 'Real Estate'}
      </Typography>
      {page === 'main' ? (
        <div className={styles.linkContainer}>
          <Link href="#AboutMe">
            <Typography
              variant={isSmallDevice ? 'body6' : 'body3'}
              weight="medium"
            >
              About Me
            </Typography>
          </Link>
          <Link href="#Projects">
            <Typography
              variant={isSmallDevice ? 'body6' : 'body3'}
              weight="medium"
            >
              Projects
            </Typography>
          </Link>
          <Link href="/contacts">
            <Typography
              variant={isSmallDevice ? 'body6' : 'body3'}
              weight="medium"
            >
              Contacts
            </Typography>
          </Link>
        </div>
      ) : (
        <div className={styles.linkContainer}>
          <Link href="/">
            <Typography
              variant={isSmallDevice ? 'body6' : 'body3'}
              weight="medium"
            >
              Main Page
            </Typography>
          </Link>
          <Link href="/contacts">
            <Typography
              variant={isSmallDevice ? 'body6' : 'body3'}
              weight="medium"
            >
              Contacts
            </Typography>
          </Link>
          {page !== 'projects' && (
            <Link href="/#Projects">
              <Typography
                variant={isSmallDevice ? 'body6' : 'body3'}
                weight="medium"
              >
                Projects
              </Typography>
            </Link>
          )}
        </div>
      )}
    </header>
  )
}
