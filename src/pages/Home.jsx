// src/pages/Home.jsx
import { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Categories from "../components/Category";
import ProductCatalog from "../components/Products/ProductCatalog";
import "../styles/page/Home.css";

function Home() {
  // Estado para determinar qué sección se muestra: 'productos', 'categorias', etc.
  const [activeSection, setActiveSection] = useState("productos");
  
  // Estado opcional para la categoría seleccionada (para filtrar productos)
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Estado para el carrito (si lo necesitas en esta página)
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log("Carrito actual:", cart);
  };

  // Función manejadora para actualizar el estado según el botón clickeado en el header
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="home-container">
      {/* Encabezado con navegación; se le pasa la función para cambiar la sección */}
      <HomeHeader onSectionChange={handleSectionChange} />

      {/* Sección condicional: muestra Productos o Categorías según el botón seleccionado */}
      {activeSection === "productos" && (
        <ProductCatalog 
          categoryId={selectedCategory}
          onAddToCart={handleAddToCart}
        />
      )}

      {activeSection === "categorias" && (
        <Categories onSelectCategory={setSelectedCategory} />
      )}
      
      {/* Puedes incluir lógica para la sección "inicio" si fuera necesario */}
    </div>
  );
}

export default Home;


