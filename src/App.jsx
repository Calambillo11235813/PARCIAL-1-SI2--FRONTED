// Importación de hojas de estilo base con TailwindCSS
import './styles/tailwind.css'

// Importación de componentes de React Router para gestionar las rutas de la aplicación
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importación de las páginas (vistas) del proyecto
import Home from './pages/Home'



/**
 * Componente principal de la aplicación
 * 
 * Define las rutas disponibles dentro de la aplicación
 * utilizando React Router DOM. Cada ruta carga un componente
 * correspondiente a la página solicitada.
 *
 * @returns {JSX.Element} El layout con las rutas de la aplicación.
 */
function App() {
  return (
    // Componente que envuelve todas las rutas y habilita el uso de React Router
    <BrowserRouter>
      {}
      <Routes>
        {/* Ruta principal que carga la página de inicio */}
        <Route path="/" element={<Home />} />

      
      </Routes>
    </BrowserRouter>
  )
}

// Exportación del componente App para su uso en main.jsx
export default App

