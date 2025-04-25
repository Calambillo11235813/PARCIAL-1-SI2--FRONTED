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
function ProductsHeader({ onSelectCategory, onToggleCategories, onShowAll , onAddProduct, productCount,selectedCategoryName}) {
  return (
    <header className="products-header"> {/* Contenedor principal del encabezado */}
      <div className="breadcrumbs_1">
        {selectedCategoryName}: {productCount} producto(s)
      </div>      
     


      <div className="buttons-container"> {/* Contenedor para los botones */}
        <button className="Categories" onClick={onShowAll}>Ver todo</button>
        <button className="Categories" onClick={onToggleCategories}>Categorías</button>
        <button className="add-product-button" onClick={onAddProduct}>Añadir nuevo producto</button>
      </div>
    </header>
  );
}

export default ProductsHeader; // Exporta el componente para ser utilizado en otras partes de la aplicación

