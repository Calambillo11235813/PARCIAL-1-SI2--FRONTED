import React from "react";

/**
 * Componente ProductsHeader
 * Este componente se encarga de renderizar el encabezado de la página de productos.
 * Incluye la ruta de navegación ("breadcrumbs") y botones de acción.
 * 
 * Props:
 * - `onSelectCategory`: Función para seleccionar una categoría específica (no utilizada directamente aquí).
 * - `onToggleCategories`: Función que alterna la visibilidad del modal o contenedor de categorías.
 * - `onShowAll`: Función para mostrar todos los productos (no utilizada directamente aquí).
 */
function ProductsHeader({ onSelectCategory, onToggleCategories, onShowAll }) {
  return (
    <header className="products-header"> {/* Contenedor principal del encabezado */}
      <div className="breadcrumbs">Todos los productos</div> {/* Ruta de navegación */}

      <div className="buttons-container"> {/* Contenedor para los botones */}
        
        {/* Botón para alternar la visibilidad de las categorías */}
        <button
          className="Categories"
          onClick={onToggleCategories} // Llama a la función pasada como prop para abrir/alternar el modal de categorías
        >
          Categorías
        </button>

        {/* Botón para añadir un nuevo producto */}
        <button className="add-product-button">Añadir nuevo productos</button>
      </div>
    </header>
  );
}

export default ProductsHeader; // Exporta el componente para ser utilizado en otras partes de la aplicación

