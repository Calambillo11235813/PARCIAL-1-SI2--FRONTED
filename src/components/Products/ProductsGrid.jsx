import React from "react";

/**
 * Componente ProductsGrid
 * Este componente es responsable de mostrar un grid (rejilla) de productos.
 * Recibe como props:
 * - `products`: Una lista de productos que se deben mostrar.
 * - `onEdit`: Una función que se ejecutará al hacer clic en el botón de editar de un producto.
 *
 * @param {Array} products - Lista de productos para mostrar.
 * @param {Function} onEdit - Función para manejar la edición de un producto.
 */
function ProductsGrid({ products, onEdit }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        // Log para verificar los datos de cada producto, especialmente el campo foto_url
        

        return (
          <div key={product.id_producto} className="product-card">
            {/* Botón para editar el producto */}
            <button
              className="edit-button"
              onClick={() => onEdit(product)}
            >
              ✏️ Editar
            </button>

            {/* Imagen del producto */}
            <img
              src={product.foto_url || "https://placehold.org/150x150"} // Usa una imagen predeterminada si foto_url no está disponible
              
              className="product-image"
            />

            {/* Título del producto */}
            <h3 className="product-title">{product.nombre}</h3>

            {/* Precio del producto */}
            <p className="product-price">bs{product.precio}</p>

            {/* Métricas adicionales del producto */}
            <div className="product-metrics">
              <div>Vendido: {product.sales}</div>
              <div>Cantidad de productos: {product.stock}</div>
            </div>
          </div>
        );
      }
      )
      }
    </div>
  );
}

export default ProductsGrid; // Exporta el componente para su uso en otras partes de la aplicación

