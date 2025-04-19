// src/components/AddProduct.jsx
import React, { useState } from "react";
import "../../styles/EditProducts.css"; // Puedes reutilizar este estilo o crear uno nuevo
import { addProduct } from "../../services/ProductsService"; // Asumiendo que ya tienes esta función

function AddProduct({ categories, onClose, onSave }) {
  const today = new Date().toISOString();
  
  // Estados para el formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [foto_url, setFotoUrl] = useState("");
  const [categoria, setCategoria] = useState(categories.length > 0 ? categories[0].id_categoria : "");
  
  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async () => {
    // Crea el objeto nuevo producto
    const newProduct = {
      nombre,
      descripcion,
      precio,
      stock,
      fecha_creacion: today,
      foto_url,
      id_categoria: categoria,
    };

    try {
      // Llama al servicio para agregar el producto al backend
      const createdProduct = await addProduct(newProduct);
      console.log("Producto añadido:", createdProduct);
      onSave(createdProduct); // Actualiza el estado en el componente padre
      onClose(); // Cierra el modal
    } catch (error) {
      console.error("Error al añadir producto:", error);
    }
  };

  return (
    <div className="edit-modal">
      <div className="modal-content">
        <h2>Añadir Producto</h2>

        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
    
        
        <label>
          Precio:
          <input type="number" step="0.01" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </label>
        
        <label>
          Stock:
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
        </label>
        
        <label>
          Imagen (URL):
          <input type="text" value={foto_url} onChange={(e) => setFotoUrl(e.target.value)} />
        </label>
        
        <label>
          Categoría:
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat.id_categoria} value={cat.id_categoria}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </label>
        
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSubmit}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;