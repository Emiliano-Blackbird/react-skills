import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Nodo raíz del DOM
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

// Render principal
createRoot(rootElement).render(
  <StrictMode>
    {/* 
      HashRouter:
      - Ideal para GitHub Pages
      - Evita errores 404 al refrescar
      - No requiere basename
    */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
