import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Characters from './pages/Characters'
import CharacterDetail from './pages/CharacterDetail'
import Info from './pages/Info'
import Episodes from './pages/Episodes'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="characters" />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<CharacterDetail />}>
            <Route index element={<Navigate to="info" />} />
            <Route path="info" element={<Info />} />
            <Route path="episodes" element={<Episodes />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App