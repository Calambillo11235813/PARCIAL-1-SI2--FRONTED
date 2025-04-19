import React, { useEffect, useState } from "react";
import "../../styles/Products.css";
import { fetchProducts } from "../../services/ProductsService";
import { getCategories } from "../../services/categoryservice";
import EditProducts from "./EditProducts";
import ProductsHeader from "./ProductsHeader";
import ProductsGrid from "./ProductsGrid";
import CategoryListModal from "./CategoryLisModal";
import AddProduct from "./AddProduct";

/**
 * Componente principal: Products
 * Este componente maneja la lógica y estructura para mostrar y editar productos,
 * así como para interactuar con categorías a través de un modal.
 */
function Products() {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect para cargar los productos al montar el componente
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(); // Llama al servicio para obtener productos desde el backend
        setProducts(data); // Guarda los productos en el estado
      } catch (err) {
        setError("Error al cargar los productos"); // Maneja errores de carga
        console.error(err);
      } finally {
        setLoading(false); // Actualiza el estado de carga
      }
    };
    loadProducts(); // Ejecuta la función de carga
  }, []);


  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories(); // Usa la función para obtener categorías
        setCategories(data); // Guarda las categorías en el estado
      } catch (err) {
        console.error("Error al cargar las categorías:", err);
      }
    };
  
    loadCategories(); // Llama a la función de carga
  }, []);

  // Muestra un mensaje mientras se cargan los productos o si hay un error
  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>{error}</div>;

  /**
   * Función para manejar la edición de un producto
   * Actualiza el estado con el producto seleccionado y abre el modal de edición.
   */
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="products-container">
      {/* Componente de encabezado que incluye breadcrumbs y botones */}
      <ProductsHeader
         
        onSelectCategory={(categoryId) => setSelectedCategory(categoryId)} // Selecciona una categoría
        onToggleCategories={() => setCategoriesVisible((prev) => !prev)} // Alterna la visibilidad del modal de categorías
        onShowAll={() => setSelectedCategory(null)} // Restablece la categoría seleccionada
        onAddProduct={() => setIsAddModalOpen(true)} 
      />

      {/* Modal de selección de categorías */}
      {categoriesVisible && (
        <CategoryListModal
        categories={categories} // Lista de categorías desde el estado
        onSelectCategory={(categoryId) => setSelectedCategory(categoryId)} 
        onClose={() => setCategoriesVisible(false)} // Función para cerrar el modal
      />
      )}

      {/* Grid de productos filtrados por categoría */}
      <ProductsGrid
        products={products.filter((product) =>
          selectedCategory ? product.id_categoria === selectedCategory : true
        )} // Filtra productos según la categoría seleccionada
        onEdit={handleEdit} // Función para editar productos
      />

      {/* Modal para editar un producto */}
      {isModalOpen && (
        <EditProducts
          product={selectedProduct} // Producto seleccionado para editar
          categories={categories} 
          onClose={() => setIsModalOpen(false)} // Cierra el modal de edición
          onSave={(updatedProduct) => {
            // Actualiza el estado de productos con el producto editado
            setProducts((prev) =>
              prev.map((product) =>
                product.id_producto === updatedProduct.id_producto
                  ? updatedProduct
                  : product
              )
            );
            setIsModalOpen(false); // Cierra el modal
          }}
        />
      )}

       
      {/* Modal de añadir producto */}
      {isAddModalOpen && (
        <AddProduct
          categories={categories}
          onClose={() => setIsAddModalOpen(false)}
          onSave={(newProduct) => {
            // Actualiza la lista de productos agregando el nuevo producto
            setProducts((prev) => [...prev, newProduct]);
          }}
        />
      )}


    </div>
  );
}

export default Products; // Exporta el componente para ser utilizado en la aplicación
