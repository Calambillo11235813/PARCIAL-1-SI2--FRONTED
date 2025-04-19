import React, { useEffect, useState } from "react";
import "../../styles/Products.css";
import { fetchProducts } from "../../services/ProductsService";
import EditProducts from "./EditProducts";

/**
 * Componente Products
 * Este componente representa la página de productos.
 * Incluye un encabezado con un botón "ADD NEW PRODUCT" y un grid de productos con sus detalles.
 *
 * @returns {JSX.Element} Estructura de la página de productos.
 */
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //estados para manejar la edición
  const [selectedProduct, setSelectedProduct] = useState(null); //
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efecto para cargar los productos al montar el componente
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(); // Carga los datos desde el backend

        setProducts(data); // Almacena los productos en el estado
      } catch (err) {
        setError("Error al cargar los productos"); // Maneja errores
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts(); // Llama a la función al montar el componente
  }, []);

  // Funcion para poder editar
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Mostrar mensaje de carga, error o productos
  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="products-container">
      {/* Encabezado de la página con navegación y botón */}
      <header className="products-header">
        {/* Breadcrumbs para mostrar la ruta actual */}
        <div className="breadcrumbs"> Todos los productos </div>

        {/* Botón para agregar un nuevo producto */}
        <button className="add-product-button">Añadir nuevo productos</button>
      </header>

      {/* Contenedor tipo grid para mostrar los productos */}
      <div className="products-grid">
        {/* Mapea los productos obtenidos del backend */}
        {products.map((product) => {
          return (
            <div key={product.id_producto} className="product-card">
              {/* Botón para editar, ubicado en la esquina superior derecha */}
              <button
                className="edit-button"
                onClick={() => handleEdit(product)}
              >
                ✏️ Editar
              </button>
              
              {/* Imagen del producto */}
              <img
                src={product.image} // Ruta de la imagen del producto desde el backend
                alt={product.name}
                className="product-image"
              />

              {/* Título del producto */}
              <h3 className="product-title">{product.nombre}</h3>

              {/* Precio del producto */}
              <p className="product-price">bs{product.precio}</p>

              {/* Métricas del producto */}
              <div className="product-metrics">
                <div>Vendido: {product.sales}</div>
                <div>Cantidad de productos : {product.stock}</div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <EditProducts
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
          onSave={(updatedProduct) => {
            setProducts((prev) =>
              prev.map((product) =>
                product.id_producto === updatedProduct.id_producto
                  ? updatedProduct
                  : product
              )
            );
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default Products; // Exporta el componente para usarlo en otras partes de la aplicación
