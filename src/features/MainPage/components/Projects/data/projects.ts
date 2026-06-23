import petCareMain from '../assets/petcareMain.png'
import petStoreMain from '../assets/petstoreMain.png'
import realEstateMain from '../assets/realestateMain.png'

export const PROJECTS = [
  {
    id: 'pet_care',
    name: 'Pet-Care',
    image: petCareMain,
    description:
      'A multi-page pet health management application that allows users to track medical information, treatments, vaccinations, and care routines for their pets.',
    technologies: [
      'React.js',
      'JavaScript',
      'CSS',
      'Adaptive Design',
      'Autorization & Authentication',
      'Rest API',
      'Multi-page application',
      'i18n',
    ],
    path: '/project-pet-care',
  },
  {
    id: 'pet_store',
    name: 'Pet-Store',
    image: petStoreMain,
    description:
      'Multi-page React application built from a Figma design mockup. The project focuses on pixel-perfect implementation and responsive layouts.',
    technologies: [
      'TypeScript',
      'Pixel Perfect',
      'Adaptive Design, Semantic Markup',
      'Reusable React Components',
      'Interactive Components',
      'React Router',
    ],
    path: '/project-pet-store',
  },
  {
    id: 'real_estate',
    name: 'Real Estate Landing',
    image: realEstateMain,
    description:
      'A responsive landing page built from a custom AI-generated Figma design.',
    technologies: [
      'Pixel Perfect',
      'Adaptive Design',
      'Semantic Markup',
      'Reusable React Components',
    ],
    path: '/project-real-estate',
  },
]
