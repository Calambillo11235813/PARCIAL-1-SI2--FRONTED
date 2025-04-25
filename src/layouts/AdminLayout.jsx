import { Outlet, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import "../styles/page/AdminDashboard.css";

function AdminLayout() {
  const navigate = useNavigate();
  const [sidebarWidth, setSidebarWidth] = useState(200);
  const isResizingRef = useRef(false);

  const handleMouseDown = () => {
    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isResizingRef.current) return;
    const newWidth = e.clientX;
    const minWidth = 150;
    const maxWidth = 400;
    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar" style={{ width: sidebarWidth }}>
        <h2>Panel</h2>
        <ul>
          <li onClick={() => navigate("/admin")}>Inicio</li>
          <li onClick={() => navigate("/admin/productos")}>Productos</li>
          <li onClick={() => navigate("/admin/pedidos")}>Pedidos</li>
          <li onClick={() => navigate("/admin/usuarios")}>Usuarios</li>
          <li onClick={() => navigate("/admin/notificaciones")}>Notificaciones</li>
          <li onClick={() => navigate("/admin/configuraciones")}>Configuraciones</li>
        </ul>
        <div className="resize-handle" onMouseDown={handleMouseDown}></div>
      </div>

      <main className="main-content" style={{ marginLeft: sidebarWidth, width: `calc(100% - ${sidebarWidth}px)` }}>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
