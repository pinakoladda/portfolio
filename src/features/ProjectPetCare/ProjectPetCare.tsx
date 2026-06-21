import { Header } from '../../components/Header'
import { Typography } from '../../shared/components/Typography'
import { ImagesCarousel } from '../../components/ImagesCarousel'
import { Footer } from '../../components/Footer'

import singInImg from './assets/petcareSignIn.png'
import registrationImg from './assets/petcareRegistration.png'
import signInErrorImg from './assets/petcareSignInError.png'

import mainPageImg from './assets/petcareMainPage.png'
import editUserInfoImg from './assets/petcareMainEditUserInfo.png'
import notificationEventImg from './assets/petcareMainNotificationEvent.png'
import addPetModalImg from './assets/petcareMainAddPetModal.png'
import addPetModalSuggestImg from './assets/petcareAddPetSuggest.png'

import petPageImg from './assets/petcarePetPage.png'
import petPageSecondImg from './assets/petcarePetPageSecondImg.png'
import editPetInfoImg from './assets/petcareEditPetModal.png'
import petPageTreatmentSectionImg from './assets/petcareAddTreatmentSection.png'
import petPageTreatmentModalImg from './assets/petcareAddTreatmentModal.png'
import petPageAddSymptomModalImg from './assets/petcareAddSymptomModal.png'
import petPageAddFoodModalImg from './assets/petcareAddFoodModal.png'

import settingsPageImg from './assets/petcareSettingsDark.png'
import settingsPageLightThemeImg from './assets/petcareSettingsLight.png'
import settingsPasswordErrorImg from './assets/petcarePasswordErrorLight.png'
import settingsEditUserModalLightImg from './assets/petcareSettingEditUserModalLight.png'

import styles from './index.module.css'
import { Link } from '../../components/Link'
import { GitHubIcon } from '../../shared/images/GitHubIcon'
import { CursorFilledIcon } from '../../shared/images/CursorFilledIcon'
import { useMediaQuery } from '@uidotdev/usehooks'

const technologies = [
  'React.js',
  'JavaScript',
  'CSS',
  'Adaptive Design',
  'Autorization & Authentication',
  'Rest API',
  'Multi-page application',
  'i18n',
]

const imagesSectionAuth = [singInImg, registrationImg, signInErrorImg]
const imagesSectionMainPage = [
  mainPageImg,
  editUserInfoImg,
  addPetModalImg,
  addPetModalSuggestImg,
  notificationEventImg,
]
const imagesSectionPetPage = [
  petPageImg,
  petPageSecondImg,
  editPetInfoImg,
  petPageTreatmentSectionImg,
  petPageTreatmentModalImg,
  petPageAddSymptomModalImg,
  petPageAddFoodModalImg,
]

const imagesSectionSettings = [
  settingsPageImg,
  settingsPageLightThemeImg,
  settingsPasswordErrorImg,
  settingsEditUserModalLightImg,
]

export const ProjectPetCare = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 700px)')

  return (
    <>
      <main className={styles.main}>
        <Header page="pet-care" />
        <section className={styles.aboutProject}>
          <Typography
            className={styles.heading}
            as="h3"
            variant={isSmallDevice ? 'body1' : 'heading3'}
            weight="medium"
          >
            About Project
          </Typography>
          <Typography
            variant={isSmallDevice ? 'body4' : 'body1'}
            weight="regular"
          >
            Pet Care is a personal project created primarily to practice and
            improve my front-end development skills. The idea came from a
            real-life need: I wanted a convenient way to store and monitor
            important information about my dog 🐶. <br />
            The main goal of the project was to create a centralized space for
            pet owners to manage essential pet information and track changes in
            their pet’s health over time. My focus was on building a clean,
            intuitive interface that makes daily use effortless while ensuring
            quick access to important data.
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
            Working on Pet Care introduced me to several new concepts and
            technical challenges. Some of the most interesting tasks included
            implementing unit conversion preferences (metric and imperial
            measure systems), adding multilingual support, and building a
            notification system with dynamic text generation. One particular
            challenge was creating user-friendly notification messages by using
            raw data from API.
          </Typography>
        </section>

        <section className={styles.features}>
          <Typography
            className={styles.heading}
            as="h3"
            variant={isSmallDevice ? 'body1' : 'heading3'}
            weight="medium"
          >
            Implemented Features
          </Typography>
          <div className={styles.featuresContainer}>
            <Typography
              className={styles.list}
              as="ul"
              variant={isSmallDevice ? 'body2' : 'heading4'}
              weight="medium"
            >
              1. User authentication and authorization
              <Typography
                className={styles.listItem}
                as="li"
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
              >
                Implemented user registration, login, logout, and protected
                routes. Access to specific pages and functionality is restricted
                based on the user's authentication status and permissions.
              </Typography>
            </Typography>
            <div className={styles.carouselContainer}>
              <ImagesCarousel images={imagesSectionAuth} />
            </div>
          </div>

          <div className={styles.featuresContainer}>
            <Typography
              className={styles.featuresSubheading}
              as="h4"
              variant={isSmallDevice ? 'body2' : 'heading4'}
              weight="medium"
            >
              2. Main Page
            </Typography>
            <Typography
              className={styles.list}
              as="ul"
              variant={isSmallDevice ? 'body4' : 'body1'}
              weight="medium"
            >
              2.1. Home Dashboard
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                User Profile Management - display and edit user information
                through a modal interface.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Smart Notifications System - reminders for upcoming vaccinations
                and scheduled treatments.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Pet Management Overview - view existing pets, access detailed
                pet profiles, and add new pets.
              </Typography>
            </Typography>

            <Typography
              className={styles.list}
              as="ul"
              variant={isSmallDevice ? 'body4' : 'body1'}
              weight="medium"
            >
              2.2. Pet Creation Workflow
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Comprehensive Pet Registration Form - modal-based form for
                creating pet profiles, including pet type, gender, date of
                birth, breed, and neutering status.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Dynamic Breed Suggestions - autocomplete breed search powered by
                backend data with an "Other" fallback option for unsupported
                breeds.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Form Validation & Controlled Inputs - implemented using select
                menus, radio buttons, and date pickers to ensure data
                consistency.
              </Typography>
            </Typography>
            <div className={styles.carouselContainer}>
              <ImagesCarousel images={imagesSectionMainPage} />
            </div>
          </div>

          <section className={styles.experience}>
            <Typography
              className={styles.heading}
              as="h3"
              variant={isSmallDevice ? 'body1' : 'heading3'}
              weight="medium"
            >
              Key Takeaways
            </Typography>
            <Typography
              variant={isSmallDevice ? 'body4' : 'body1'}
              weight="regular"
            >
              Developing Pet Care showed me how engaging it can be to work on a
              larger, feature-rich application over an extended period of time.
              Seeing a project evolve from an idea into a useful product was
              both motivating and rewarding. It also reinforced an important
              lesson: tasks that initially seem difficult often become valuable
              learning opportunities, helping build confidence, problem-solving
              skills, and a desire to take on increasingly complex challenges.
            </Typography>
          </section>

          <div className={styles.featuresContainer}>
            <Typography
              className={styles.featuresSubheading}
              as="h4"
              variant={isSmallDevice ? 'body2' : 'heading4'}
              weight="medium"
            >
              3. Pet Profile Page
            </Typography>
            <Typography
              className={styles.list}
              as="ul"
              variant={isSmallDevice ? 'body4' : 'body1'}
              weight="medium"
            >
              3.1. Pet Information
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Pet Profile Management - view, edit, and delete pet profiles.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Zodiac Sign Calculation - automatically determines and displays
                the pet's zodiac sign based on its birth date.
              </Typography>
            </Typography>
            <Typography
              className={styles.list}
              as="ul"
              variant={isSmallDevice ? 'body4' : 'body1'}
              weight="medium"
            >
              3.2. Medical Information
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Weight Tracking - record and review weight history.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Symptom Monitoring - add symptoms manually or select from a
                predefined list of common symptoms for faster data entry.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Historical Data Management - view and delete previously recorded
                medical entries across all categories.
              </Typography>
            </Typography>
            <Typography
              className={styles.list}
              as="ul"
              variant={isSmallDevice ? 'body4' : 'body1'}
              weight="medium"
            >
              3.3. Treatments & Vaccinations
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Treatment Scheduling System - manage medications and
                vaccinations with support for one-time and recurring schedules.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Flexible Recurrence Rules - treatments can repeat daily, weekly,
                monthly, or yearly.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Automated Reminder Generation - scheduled treatments
                automatically create reminders displayed on the dashboard.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Expandable Vaccination History - vaccination records are
                collapsed after the first three entries, with additional items
                accessible via a "Show More" option.
              </Typography>
            </Typography>
            <div className={styles.carouselContainer}>
              <ImagesCarousel images={imagesSectionPetPage} />
            </div>
          </div>

          <div className={styles.featuresContainer}>
            <Typography
              className={styles.featuresSubheading}
              as="h4"
              variant={isSmallDevice ? 'body2' : 'heading4'}
              weight="medium"
            >
              4. Settings Page
            </Typography>
            <Typography
              className={styles.list}
              as="ul"
              variant={isSmallDevice ? 'body4' : 'body1'}
              weight="medium"
            >
              4.1. Account Settings
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Profile Management - update personal information and profile
                picture.
              </Typography>
            </Typography>
            <Typography
              className={styles.list}
              as="ul"
              variant={isSmallDevice ? 'body4' : 'body1'}
              weight="medium"
            >
              4.2. Security
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Password Change Functionality - secure password update workflow
                with validation for current password verification and
                confirmation matching.
              </Typography>
            </Typography>

            <Typography
              className={styles.list}
              as="ul"
              variant={isSmallDevice ? 'body4' : 'body1'}
              weight="medium"
            >
              4.3. Application Preferences
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Theme Customization - switch between application themes.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Measurement Units Configuration - customize preferred
                measurement units.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Multilingual Support - change the application language.
              </Typography>
              <Typography
                className={styles.listItem}
                variant={isSmallDevice ? 'body4' : 'body2'}
                weight="regular"
                as="li"
              >
                Global State Management - user preferences managed through React
                Context for application-wide state synchronization.
              </Typography>
            </Typography>

            <div className={styles.carouselContainer}>
              <ImagesCarousel images={imagesSectionSettings} />
            </div>
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
            One unexpected challenge was designing the application's user
            interface myself. A significant amount of time was spent bridging
            the gap between how I envisioned the design and how it ultimately
            appeared on screen. Through this process, I gained a greater
            appreciation for UI/UX design and the importance of visual
            consistency, accessibility, and color harmony. This experience made
            me especially interested in future collaboration with designers,
            where design concepts and implementation can complement each other
            more effectively.
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
      <Footer page="pet-care" />
    </>
  )
}
