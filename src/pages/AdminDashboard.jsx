import React from "react";
import { useNavigate } from "react-router-dom"; // Hook para manejar la navegación
import "../styles/AdminDashboard.css";
import "../styles/tailwind.css";

function AdminDashboard() {
  const navigate = useNavigate(); // Hook para realizar la navegación

  return (
    <div className="admin-dashboard">
      {/* Menú lateral */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          {/* Opciones del menú lateral con navegación */}
          <li onClick={() => navigate("/")}>Inicio</li>
          <li onClick={() => navigate("/productos")}>Productos</li>
          <li onClick={() => navigate("/pedidos")}>Pedidos</li>
          <li onClick={() => navigate("/usuarios")}>Usuarios</li>
          <li onClick={() => navigate("/notificaciones")}>Notificaciones</li>
          <li onClick={() => navigate("/configuraciones")}>Configuraciones</li>
        </ul>
      </aside>

      {/* Área de contenido principal */}
      <main className="main-content">
        <h1>Bienvenido al Panel de Administración</h1>
        <p>Aquí puedes gestionar tu tienda.</p>
      </main>
    </div>
  );
}

export default AdminDashboard;


