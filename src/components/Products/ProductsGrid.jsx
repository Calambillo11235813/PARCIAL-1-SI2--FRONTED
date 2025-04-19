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
    <div className="products-grid"> {/* Contenedor principal de la rejilla de productos */}
      {products.map((product) => ( /* Itera sobre la lista de productos */
        <div key={product.id_producto} className="product-card"> {/* Tarjeta individual del producto */}
          
          {/* Botón para editar el producto */}
          <button
            className="edit-button"
            onClick={() => onEdit(product)} // Llama a la función `onEdit` pasando el producto seleccionado
          >
            ✏️ Editar
          </button>
          
          {/* Imagen del producto */}
          <img
            src={product.image} // URL de la imagen del producto
            alt={product.name} // Texto alternativo si la imagen no se carga
            className="product-image"
          />
          
          {/* Título del producto */}
          <h3 className="product-title">{product.nombre}</h3>
          
          {/* Precio del producto */}
          <p className="product-price">bs{product.precio}</p>
          
          {/* Métricas adicionales del producto */}
          <div className="product-metrics">
            <div>Vendido: {product.sales}</div> {/* Cantidad vendida */}
            <div>Cantidad de productos : {product.stock}</div> {/* Stock disponible */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid; // Exporta el componente para su uso en otras partes de la aplicación

