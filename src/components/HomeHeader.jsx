// src/components/HomeHeader.jsx
import React from "react";
import "../styles/HomeHeader.css";

function HomeHeader({ onSectionChange }) {
  return (
    <header className="home-header">
      <nav className="nav-bar">
        {/* Enlaces de navegación */}
        <ul className="nav-links">
          <li onClick={() => onSectionChange("inicio")}>Inicio</li>
          <li onClick={() => onSectionChange("productos")}>Productos</li>
          <li onClick={() => onSectionChange("categorias")}>Categorías</li>
        </ul>

        {/* Acciones: Iniciar sesión y Mi carrito */}
        <div className="nav-actions">
          <span className="login-text">Iniciar sesión</span>
          <span className="cart-text">Mi carrito</span>
        </div>
      </nav>
    </header>
  );
}

export default HomeHeader;
