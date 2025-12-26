import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Obtenemos el elemento root del DOM
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

// Creamos el root de React y renderizamos la app
createRoot(rootElement).render(
  <StrictMode>
    {/* BrowserRouter con basename para GitHub Pages */}
    <BrowserRouter basename='/react-skills'>
      <App />
    </BrowserRouter>
  </StrictMode>
)
