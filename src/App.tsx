import { BrowserRouter, Route, Routes } from 'react-router'
import { MainPage } from './features/MainPage'
import { ProjectPetCare } from './features/ProjectPetCare'
import { Contacts } from './features/Contacts'
import { ProjectPetStore } from './features/ProjectPetStore'
import { ProjectRealEstate } from './features/ProjectRealEstate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
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
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
