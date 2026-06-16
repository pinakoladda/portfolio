import { Typography } from '../../shared/components/Typography'
import styles from './index.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Typography variant="heading2" weight="medium">
        Portfolio
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
