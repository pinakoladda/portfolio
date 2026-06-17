import { Typography } from '../../shared/components/Typography'
import styles from './index.module.css'

interface HeaderProps {
  page: 'main' | 'pet-care' | 'pet-store' | 'real-estate'
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
        {page === 'pet-care' && 'Pet-Care Project'}
        {page === 'pet-store' && 'Pet-Store Project'}
        {page === 'real-estate' && 'Real Estate Landing Project'}
      </Typography>
      <div className={styles.linkContainer}>
        <span>About Me</span>
        <span>Projects</span>
        <span>Contacts</span>
        <span>LinkedIn</span>
        <span>GitHub</span>
      </div>
    </header>
  )
}
