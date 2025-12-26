import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ReactSkills01 from './pages/ReactSkills01'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Barra de navegación */}
      <nav className="p-4 bg-blue-600 text-white shadow-md">
        <Link to="/" className="font-bold text-xl">React + Typescript Skills</Link>
      </nav>

      {/* Contenido dinámico */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ReactSkills01" element={<ReactSkills01 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
