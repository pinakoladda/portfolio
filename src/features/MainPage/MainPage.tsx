import { Header } from '../../components/Header'
import { Typography } from '../../shared/components/Typography'
import { About } from './components/About'
import { Avatar } from './components/Avatar'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'

import styles from './index.module.css'

export const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <Header page="main" />
      <section className={styles.mainInfoContainer}>
        <Avatar />
        <Typography
          className={styles.mainName}
          variant="heading3"
          weight="medium"
        >
          Junior Frontend Developer
        </Typography>
        <Typography variant="body1" weight="medium">
          Based in Warsaw
        </Typography>
      </section>
      <About />
      <Projects />
      <Experience />
    </main>
  )
}
