import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

/**
 * Punto de entrada principal de la aplicación
 * 
 * La aplicación está envuelta en `React.StrictMode` para activar 
 * comprobaciones adicionales y advertencias en modo desarrollo.
 */

// Crea la raíz React a partir del contenedor HTML con id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Renderiza la aplicación completa */}
    <App />
  </StrictMode>,
)
