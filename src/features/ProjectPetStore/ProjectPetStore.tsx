import { Header } from '../../components/Header'
import { ImagesCarousel } from '../../components/ImagesCarousel'
import { Typography } from '../../shared/components/Typography'

import petstoreMainBannerLImg from './assets/petstoreMainDesktopBanner.png'
import petstoreCategoryBannerLImg from './assets/petstoreCategoryBannerDesktop.png'
import petstoreProductBannerLImg from './assets/petstoreProductBannerDesktop.png'

import petstoreMainBannerSImg from './assets/petstoreMainBannerMobile.png'
import petstoreCategoryBannerSImg from './assets/petstoreCategoryBannerMobile.png'
import petstoreProductBannerSImg from './assets/petstoreProductBannerMobile.png'
import petstoreCategoryPetsCardsMobileImg from './assets/petstoreCategoryPetCardsMobile.png'
import petstoreMainNewsCardsMobileImg from './assets/petstoreMainNewsCardsMobile.png'
import petstoreFooterMobileImg from './assets/petstoreFooterMobile.png'
import petstoreProductCustomerMobileImg from './assets/petstoreProductCustomerMobile.png'

import petstoreBlueBannerDesktoImg from './assets/petstoreMainBannerBlueDesktop.png'
import petstorePetCardsDesktopImg from './assets/petstoreMainPetCardsDesktop.png'
import petstoreProductCustomerDesktopImg from './assets/petstoreProductCustomersDesktop.png'
import petstoreMainSellersDesktopImg from './assets/petstoreMainSellersDesktop.png'
import petstoreMainNewsCardsDesktopImg from './assets/petstoreMainNewsCardsDesktop.png'
import petstoreMainProductsDesktopImg from './assets/petstoreMainProductsDesctop.png'

import styles from './index.module.css'
import { Footer } from '../../components/Footer'
import { GitHubIcon } from '../../shared/images/GitHubIcon'
import { Link } from '../../components/Link'
import { CursorFilledIcon } from '../../shared/images/CursorFilledIcon'
import { useMediaQuery } from '@uidotdev/usehooks'

const technologies = [
  'TypeScript',
  'Pixel Perfect',
  'Adaptive Design',
  'Semantic Markup',
  'Design System',
  'CSS variables',
  'Interactive Components',
  'React Router',
  'Reusable React Components',
]

const sectionPagesImages = [
  petstoreMainBannerLImg,
  petstoreCategoryBannerLImg,
  petstoreProductBannerLImg,
]

const sectionPagesMobileImages = [
  petstoreMainBannerSImg,
  petstoreCategoryBannerSImg,
  petstoreProductBannerSImg,
  petstoreMainNewsCardsMobileImg,
  petstoreCategoryPetsCardsMobileImg,
  petstoreFooterMobileImg,
  petstoreProductCustomerMobileImg,
]

const sectionPagesDesktopImages = [
  petstorePetCardsDesktopImg,
  petstoreBlueBannerDesktoImg,
  petstoreProductCustomerDesktopImg,
  petstoreMainSellersDesktopImg,
  petstoreMainNewsCardsDesktopImg,
  petstoreMainProductsDesktopImg,
]

export const ProjectPetStore = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 700px)')

  return (
    <>
      <main className={styles.main}>
        <Header page="pet-store" />
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
            This project was developed based on a Figma design mockup, with a
            strong focus on accurately translating the design into a fully
            functional user interface.
          </Typography>
        </section>
        <section className={styles.technologies}>
          <Typography
            className={styles.heading}
            as="h3"
            variant={isSmallDevice ? 'body1' : 'heading3'}
            weight="medium"
          >
            Technics used in this project:
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
            My main goal was to achieve a pixel-perfect implementation that
            closely matched the original Figma design. One challenge was that
            the mockup included only two screen sizes, so I had to design and
            implement the layouts between those breakpoints myself while
            maintaining visual consistency across different devices.
          </Typography>
        </section>

        <section className={styles.features}>
          <div className={styles.featuresContainer}>
            <Typography
              className={styles.list}
              as="ul"
              variant={isSmallDevice ? 'body1' : 'heading3'}
              weight="medium"
            >
              The application consists of three pages:
              <Typography
                className={styles.listItem}
                as="li"
                variant={isSmallDevice ? 'body4' : 'body1'}
                weight="regular"
              >
                Main Page
              </Typography>
              <Typography
                className={styles.listItem}
                as="li"
                variant={isSmallDevice ? 'body4' : 'body1'}
                weight="regular"
              >
                Catalog Page
              </Typography>
              <Typography
                className={styles.listItem}
                as="li"
                variant={isSmallDevice ? 'body4' : 'body1'}
                weight="regular"
              >
                Product Page
              </Typography>
            </Typography>
            <div className={styles.carouselContainer}>
              <ImagesCarousel images={sectionPagesImages} />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.textContainer}>
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
                  Recreated the design with close visual accuracy, ensuring
                  consistency with the original Figma mockups.
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
                  Used semantic HTML elements to improve code readability,
                  accessibility, and maintainability.
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant={isSmallDevice ? 'body4' : 'body2'}
                  weight="regular"
                  as="li"
                >
                  Built reusable React components to promote consistency and
                  reduce code duplication across the application.
                </Typography>
              </div>
              {isSmallDevice && (
                <div className={styles.carouselContainer}>
                  <ImagesCarousel
                    className={styles.carousel}
                    images={sectionPagesMobileImages}
                  />
                </div>
              )}
              <div className={styles.featuresContainer}>
                <div>
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
                    Implemented media queries to support multiple screen sizes
                    and provide a seamless experience across desktop, tablet,
                    and mobile devices.
                  </Typography>
                  <Typography
                    className={styles.listItem}
                    variant={isSmallDevice ? 'body4' : 'body2'}
                    weight="regular"
                    as="li"
                  >
                    Ensured smooth transitions between design breakpoints for
                    improved usability on intermediate screen resolutions.
                  </Typography>
                </div>
              </div>
              <div className={styles.featuresContainer}>
                <Typography
                  className={styles.list}
                  as="h4"
                  variant={isSmallDevice ? 'body2' : 'heading4'}
                  weight="medium"
                >
                  4. Interactive UI Elements
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant={isSmallDevice ? 'body4' : 'body2'}
                  weight="regular"
                  as="li"
                >
                  Image Carousel Component - developed an interactive image
                  slider for enhanced product presentation and user engagement.
                </Typography>
              </div>
              <div className={styles.featuresContainer}>
                <Typography
                  className={styles.list}
                  as="h4"
                  variant={isSmallDevice ? 'body2' : 'heading4'}
                  weight="medium"
                >
                  5. Navigation
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant={isSmallDevice ? 'body4' : 'body2'}
                  weight="regular"
                  as="li"
                >
                  Client-Side Routing - implemented navigation between pages
                  using React Router, enabling a smooth single-page application
                  experience.
                </Typography>
              </div>
            </div>
            {!isSmallDevice && (
              <div className={styles.carouselContainer}>
                <ImagesCarousel
                  className={styles.carousel}
                  images={sectionPagesMobileImages}
                />
              </div>
            )}
          </div>

          <div className={styles.carouselContainer}>
            <ImagesCarousel images={sectionPagesDesktopImages} />
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
            This project improved my understanding of responsive design and
            strengthened my attention to detail. It also showed me that frontend
            development often requires making design decisions beyond what is
            provided in the mockup. Most importantly, I found the process of
            bringing a design to life highly rewarding, especially when the
            final result closely matched the original vision.
          </Typography>
        </section>

        <section className={styles.linkContainer}>
          <GitHubIcon />
          <Link className={styles.link} href="https://github.com/pinakoladda">
            <Typography
              variant={isSmallDevice ? 'body4' : 'body1'}
              weight="regular"
            >
              View code on GitHub
            </Typography>
          </Link>
          <CursorFilledIcon width="20" height="20" />
        </section>
      </main>
      <Footer page="pet-store" />
    </>
  )
}
