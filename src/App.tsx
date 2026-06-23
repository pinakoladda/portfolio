import { BrowserRouter, Route, Routes } from 'react-router'
import { MainPage } from './features/MainPage'
import { ProjectPetCare } from './features/ProjectPetCare'
import { ProjectPetStore } from './features/ProjectPetStore'
import { ProjectRealEstate } from './features/ProjectRealEstate'
import { ContactsPage } from './features/ContactsPage'

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/project-pet-care" element={<ProjectPetCare />} />
        <Route path="/project-pet-store" element={<ProjectPetStore />} />
        <Route path="/project-real-estate" element={<ProjectRealEstate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
