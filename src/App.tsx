import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ReactSkills01 from './pages/ReactSkills01'
import ReactSkills02 from './pages/ReactSkills02'
import ReactSkills03 from './pages/ReactSkills03'
import ReactSkills04 from './pages/ReactSkills04'
import ReactSkills05 from './pages/ReactSkills05'
import ReactSkills06 from './pages/ReactSkills06'
import ReactSkills07 from './pages/ReactSkills07'

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
          <Route path="/ReactSkills02" element={<ReactSkills02 />} />
          <Route path="/ReactSkills03" element={<ReactSkills03 />} />
          <Route path="/ReactSkills04" element={<ReactSkills04 />} />
          <Route path="/ReactSkills05" element={<ReactSkills05 />} />
          <Route path="/ReactSkills06" element={<ReactSkills06 />} />
          <Route path="/ReactSkills07" element={<ReactSkills07 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
