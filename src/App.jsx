

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard';
import Products from "./components/Products/Products";
import Register from './pages/Register';
import Login from './pages/Login';



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

        {/* Nueva ruta que carga el dashboard administrativo */}
        <Route path="/admin" element={<AdminDashboard />} />
     
        {/* Ruta para la página de productos */}
        <Route path="/productos" element={<Products />} />

        {/* ✅ Nuevas rutas para autenticación */}
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  )
}

// Exportación del componente App para su uso en main.jsx
export default App

