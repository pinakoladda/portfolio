import petCareMain from '../assets/petcareMain.png'
import petStoreMain from '../assets/petstoreMain.png'
import realEstateMain from '../assets/realestateMain.png'

export const PROJECTS = [
  {
    id: 'pet_care',
    name: 'Pet-Care',
    image: petCareMain,
    description:
      'The Pet Care project was conceived primarily to practice and develop my skills. But the idea itself was driven by my personal need for a similar app to monitor information about my dog. 🐶',
    technologies: ['React.js', 'JS', 'CSS', 'HTML'],
    path: '/project-pet-care',
  },
  {
    id: 'pet_store',
    name: 'Pet-Store',
    image: petStoreMain,
    description:
      'I worked with a Figma design layout for this project. The project consists of three pages: Main Page, Category Page, and Product Page.',
    technologies: [
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
      'I worked with a Figma design layout for this project. The project consists of Main Page.',
    technologies: [
      'Pixel Perfect',
      'Adaptive Design',
      'Semantic Markup',
      'Reusable React Components',
    ],
    path: '/project-real-estate',
  },
]
