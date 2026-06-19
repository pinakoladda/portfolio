import { BrowserRouter, Route, Routes } from 'react-router'
import { MainPage } from './features/MainPage'
import { ProjectPetCare } from './features/ProjectPetCare'
import { ProjectPetStore } from './features/ProjectPetStore'
import { ProjectRealEstate } from './features/ProjectRealEstate'
import { ProjectsPage } from './features/ProjectsPage'
import { ContactsPage } from './features/ContactsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Routes>
        <Route path="/project-pet-care" element={<ProjectPetCare />} />
      </Routes>
      <Routes>
        <Route path="/project-pet-store" element={<ProjectPetStore />} />
      </Routes>
      <Routes>
        <Route path="/project-real-estate" element={<ProjectRealEstate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
