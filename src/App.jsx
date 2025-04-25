import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Productos from "./pages/PageProducts";
import PlaceholderPage from "./Placeholder";
import Home from "./pages/Home"; // Importa el componente Home

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública para Home */}
        <Route path="/" element={<Home />} />

        {/* Rutas del panel de administración */}
        <Route path="/admin" element={<AdminLayout />}>  
          <Route index element={<AdminDashboard />} />
          <Route path="productos" element={<Productos />} />
          <Route path="pedidos" element={<PlaceholderPage title="Pedidos" />} />
          <Route path="usuarios" element={<PlaceholderPage title="Usuarios" />} />
          <Route path="notificaciones" element={<PlaceholderPage title="Notificaciones" />} />
          <Route path="configuraciones" element={<PlaceholderPage title="Configuraciones" />} />
        </Route>

        {/* Ruta comodín para 404, opcional */}
        { /*<Route path="*" element={<NotFound />} />*/ }
      </Routes>
    </BrowserRouter>
  );
}

export default App;

