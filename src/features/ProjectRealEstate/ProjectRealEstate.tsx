import { Header } from '../../components/Header'
import { ImagesCarousel } from '../../components/ImagesCarousel'
import { Typography } from '../../shared/components/Typography'
import styles from './index.module.css'

import realestate1Desktop from './assets/realestate1Desktop.png'
import realestate2Desktop from './assets/realestate2Desktop.png'
import realestate3Desktop from './assets/realestate3Desktop.png'

import realestate1Mobile from './assets/realestate1Mobile.png'
import realestate2Mobile from './assets/realestate2Mobile.png'
import realestate3Mobile from './assets/realestate3Mobile.png'
import realestate4Mobile from './assets/realestate4Mobile.png'
import realestate5Mobile from './assets/realestate5Mobile.png'
import { GitHubIcon } from '../../shared/images/GitHubIcon'
import { Link } from '../../components/Link'
import { CursorFilledIcon } from '../../shared/images/CursorFilledIcon'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from '@uidotdev/usehooks'

const projectImagesMobile = [
  realestate1Mobile,
  realestate2Mobile,
  realestate3Mobile,
  realestate4Mobile,
  realestate5Mobile,
]

const projectImagesDesktop = [
  realestate1Desktop,
  realestate2Desktop,
  realestate3Desktop,
]

const technologies = [
  'Pixel Perfect',
  'Adaptive Design',
  'Semantic Markup',
  'Anchor Navigation',
  'Reusable React Components',
]

export const ProjectRealEstate = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 700px)')

  return (
    <>
      <main className={styles.main}>
        <Header page="real-estate" />
        <section className={styles.aboutProject}>
          <Typography
            className={styles.heading}
            as="h3"
            variant={isSmallDevice ? 'body1' : 'heading3'}
            weight="medium"
          >
            Project Overview
          </Typography>
          <Typography
            variant={isSmallDevice ? 'body4' : 'body1'}
            weight="regular"
          >
            A responsive real estate landing page built from an AI-generated
            Figma design. The project showcases pixel-perfect development,
            semantic HTML, component-based architecture, and adaptive layouts
            across multiple screen sizes.
          </Typography>
        </section>
        <section className={styles.technologies}>
          <div className={styles.carouselContainer}>
            <ImagesCarousel images={projectImagesDesktop} />
          </div>
          <div className={styles.technologiesTextContainer}>
            <Typography
              as="h3"
              variant={isSmallDevice ? 'body1' : 'heading3'}
              weight="medium"
            >
              Technics used in project:
            </Typography>
            <ul className={styles.technologiesList}>
              {technologies.map((item) => {
                return (
                  <Typography
                    as="li"
                    className={styles.listItem}
                    variant={isSmallDevice ? 'body4' : 'body2'}
                    weight="regular"
                    style="italic"
                    key={item}
                  >
                    {item}
                  </Typography>
                )
              })}
            </ul>
          </div>
        </section>

        <section className={styles.experience}>
          <Typography
            className={styles.heading}
            as="h3"
            variant={isSmallDevice ? 'body1' : 'heading3'}
            weight="medium"
          >
            Challenges
          </Typography>
          <Typography
            variant={isSmallDevice ? 'body4' : 'body1'}
            weight="regular"
          >
            This project was primarily focused on improving my CSS skills and
            practicing pixel-perfect implementation. Since I created the design
            mockup myself using AI tools before building it in Figma.
          </Typography>
        </section>

        <section className={styles.features}>
          <div className={styles.container}>
            <div className={styles.featuresText}>
              <Typography
                className={styles.heading}
                as="h3"
                variant={isSmallDevice ? 'body1' : 'heading3'}
                weight="medium"
              >
                Key Features Implemented
              </Typography>
              <div className={styles.featuresContainer}>
                <Typography
                  className={styles.list}
                  as="h4"
                  variant={isSmallDevice ? 'body2' : 'heading4'}
                  weight="medium"
                >
                  1. Pixel-Perfect Development
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant={isSmallDevice ? 'body4' : 'body2'}
                  weight="regular"
                  as="li"
                >
                  Recreated the interface with close visual accuracy to the
                  original Figma design.
                </Typography>
              </div>
              <div className={styles.featuresContainer}>
                <Typography
                  className={styles.list}
                  as="h4"
                  variant={isSmallDevice ? 'body2' : 'heading4'}
                  weight="medium"
                >
                  2. Semantic & Maintainable Code
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant={isSmallDevice ? 'body4' : 'body2'}
                  weight="regular"
                  as="li"
                >
                  Used semantic HTML elements to improve accessibility,
                  readability, and maintainability.
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant={isSmallDevice ? 'body4' : 'body2'}
                  weight="regular"
                  as="li"
                >
                  Component-Based Architecture - developed reusable components
                  to promote consistency and simplify future development.
                </Typography>
              </div>
              <div className={styles.featuresContainer}>
                <Typography
                  className={styles.list}
                  as="h4"
                  variant={isSmallDevice ? 'body2' : 'heading4'}
                  weight="medium"
                >
                  3. Responsive UX
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant={isSmallDevice ? 'body4' : 'body2'}
                  weight="regular"
                  as="li"
                >
                  Responsive Layout - implemented media queries to ensure a
                  seamless experience across different screen sizes and devices.
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant={isSmallDevice ? 'body4' : 'body2'}
                  weight="regular"
                  as="li"
                >
                  Smooth Anchor Navigation - implemented smooth scrolling to
                  page sections using anchor links for intuitive and seamless
                  navigation.
                </Typography>
              </div>
            </div>
            <section className={styles.linkContainer}>
              <Link
                className={styles.link}
                href="https://github.com/pinakoladda"
                target="_blank"
              >
                <GitHubIcon />
                <Typography
                  variant={isSmallDevice ? 'body4' : 'body1'}
                  weight="regular"
                >
                  View code on GitHub
                </Typography>
                <CursorFilledIcon width="20" height="20" />
              </Link>
            </section>
          </div>
          <div className={styles.carouselContainer}>
            <ImagesCarousel
              className={styles.carousel}
              images={projectImagesMobile}
            />
          </div>
        </section>
        <section className={styles.experience}>
          <Typography
            className={styles.heading}
            as="h3"
            variant={isSmallDevice ? 'body1' : 'heading3'}
            weight="medium"
          >
            Lessons Learned
          </Typography>
          <Typography
            variant={isSmallDevice ? 'body4' : 'body1'}
            weight="regular"
          >
            This project provided valuable hands-on experience with CSS and
            responsive layouts. It also reinforced the importance of attention
            to detail when translating a design into code and gave me experience
            working through the entire process, from generating the initial
            design concept to implementing the final interface.
          </Typography>
        </section>
      </main>
      <Footer page="real-estate" />
    </>
  )
}
