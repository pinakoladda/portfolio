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
  return (
    <>
      <main className={styles.main}>
        <Header page="pet-store" />
        <section className={styles.aboutProject}>
          <Typography
            className={styles.heading}
            as="h3"
            variant="heading3"
            weight="medium"
          >
            Project Overview
          </Typography>
          <Typography variant="body1" weight="regular">
            This project was developed based on a Figma design mockup, with a
            strong focus on accurately translating the design into a fully
            functional user interface.
          </Typography>
        </section>
        <section className={styles.features}>
          <div className={styles.featuresContainer}>
            <Typography
              className={styles.list}
              as="h3"
              variant="heading3"
              weight="medium"
            >
              The application consists of three pages:
              <Typography
                className={styles.listItem}
                as="li"
                variant="body1"
                weight="regular"
              >
                Main Page
              </Typography>
              <Typography
                className={styles.listItem}
                as="li"
                variant="body1"
                weight="regular"
              >
                Category Page
              </Typography>
              <Typography
                className={styles.listItem}
                as="li"
                variant="body1"
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
                variant="heading3"
                weight="medium"
              >
                Key Features Implemented
              </Typography>
              <div className={styles.featuresContainer}>
                <Typography
                  className={styles.list}
                  as="h4"
                  variant="heading4"
                  weight="medium"
                >
                  1. Pixel-Perfect Development.
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant="body2"
                  weight="regular"
                  as="li"
                >
                  Pixel-Perfect Implementation - recreated the design with close
                  visual accuracy, ensuring consistency with the original Figma
                  mockups.
                </Typography>
              </div>
              <div className={styles.featuresContainer}>
                <Typography
                  className={styles.list}
                  as="h4"
                  variant="heading4"
                  weight="medium"
                >
                  2. Semantic & Maintainable Code.
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant="body2"
                  weight="regular"
                  as="li"
                >
                  Semantic HTML Structure - utilized semantic HTML elements to
                  improve code readability, accessibility, and maintainability.
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant="body2"
                  weight="regular"
                  as="li"
                >
                  Component-Based Architecture — built reusable React components
                  to promote consistency and reduce code duplication across the
                  application.
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant="body2"
                  weight="regular"
                  as="li"
                >
                  Component-Based Architecture — built reusable React components
                  to promote consistency and reduce code duplication across the
                  application.
                </Typography>
              </div>
              <div className={styles.featuresContainer}>
                <div>
                  <Typography
                    className={styles.list}
                    as="h4"
                    variant="heading4"
                    weight="medium"
                  >
                    3. Responsive User Experience.
                  </Typography>
                  <Typography
                    className={styles.listItem}
                    variant="body2"
                    weight="regular"
                    as="li"
                  >
                    Responsive & Adaptive Design - implemented media queries to
                    support multiple screen sizes and provide a seamless
                    experience across desktop, tablet, and mobile devices.
                  </Typography>
                  <Typography
                    className={styles.listItem}
                    variant="body2"
                    weight="regular"
                    as="li"
                  >
                    Flexible Layouts - ensured smooth transitions between design
                    breakpoints for improved usability on intermediate screen
                    resolutions.
                  </Typography>
                </div>
              </div>
              <div className={styles.featuresContainer}>
                <Typography
                  className={styles.list}
                  as="h4"
                  variant="heading4"
                  weight="medium"
                >
                  4. Interactive UI Elements.
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant="body2"
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
                  variant="heading4"
                  weight="medium"
                >
                  5. Navigation.
                </Typography>
                <Typography
                  className={styles.listItem}
                  variant="body2"
                  weight="regular"
                  as="li"
                >
                  Client-Side Routing - implemented navigation between the Main
                  Page, Category Page, and Product Page using React Router,
                  enabling a smooth single-page application experience.
                </Typography>
              </div>
            </div>
            <div className={styles.carouselContainer}>
              <ImagesCarousel
                className={styles.carousel}
                images={sectionPagesMobileImages}
              />
            </div>
          </div>

          <div className={styles.carouselContainer}>
            <ImagesCarousel images={sectionPagesDesktopImages} />
          </div>
        </section>
        <section className={styles.linkContainer}>
          <GitHubIcon />
          <Link className={styles.link} href="https://github.com/pinakoladda">
            <Typography variant="body1" weight="regular">
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
