import { BrowserRouter, Route, Routes } from 'react-router'
import { MainPage } from './features/MainPage'
import { ProjectPetCare } from './features/ProjectPetCare'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/project-pet-care" element={<ProjectPetCare />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
