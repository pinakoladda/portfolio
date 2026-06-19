import { useMediaQuery } from '@uidotdev/usehooks'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Typography } from '../../shared/components/Typography'
import { About } from './components/About'
import { Avatar } from './components/Avatar'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'

import styles from './index.module.css'

export const MainPage = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 620px)')

  return (
    <>
      <main className={styles.mainPage} id="MainPage">
        <Header page="main" />
        <section className={styles.mainInfoContainer}>
          <Avatar />
          <Typography
            className={styles.mainName}
            variant={isSmallDevice ? 'heading4' : 'heading3'}
            weight="semi-bold"
          >
            Nina Koliada
          </Typography>
          <Typography
            className={styles.mainProfession}
            variant={isSmallDevice ? 'body1' : 'heading3'}
            weight="medium"
          >
            Junior Frontend Developer
          </Typography>
          <Typography
            variant={isSmallDevice ? 'body4' : 'body1'}
            weight="medium"
          >
            Based in Warsaw
          </Typography>
        </section>
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer page="main" />
    </>
  )
}
