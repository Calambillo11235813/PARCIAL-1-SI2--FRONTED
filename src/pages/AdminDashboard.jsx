import React from "react";
import "../styles/AdminDashboard.css"; // Importar el archivo CSS personalizado

/**
 * Componente AdminDashboard
 * Representa el panel de administración para gestionar la tienda.
 * Incluye un menú lateral y un área principal donde se mostrará contenido dinámico.
 */
function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      {/* Menú lateral */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-menu">
          {/* Elementos del menú lateral */}
          <li className="menu-item">Inicio</li>
          <li className="menu-item">Productos</li>
          <li className="menu-item">Pedidos</li>
          <li className="menu-item">Usuarios</li>
          <li className="menu-item">Configuración</li>
        </ul>
      </aside>

      {/* Área principal */}
      <main className="main-content">
        <h1 className="main-title"> Panel de Administración</h1>
        <p className="main-description">
          Aquí puedes gestionar todo lo relacionado con tu tienda.
        </p>
      </main>
    </div>
  );
}

export default AdminDashboard; // Exportar el componente para su uso en otras partes de la aplicación