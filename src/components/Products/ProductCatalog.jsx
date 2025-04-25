import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/ProductsService";
import "../../styles/products/ProductCatalog.css";

function ProductCatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error al cargar productos", err);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="product-catalog">
    {products.map((product) => (
        <div className="product-card" key={product.id_producto}>
          <img 
            className="product-image"
            src={product.foto_url || "https://placehold.co/150x150"} 
            alt={product.nombre} 
          />
          <h3 className="product-title">{product.nombre}</h3>
          <p className="product-price">Bs. {product.precio}</p>
          <button className="add-to-cart-button">Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ProductCatalog;

