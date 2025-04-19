import React, { useState } from "react";
import "../../styles/EditModal.css"; 
function EditModal({ product, onClose, onSave }) {
    // Estados locales para manejar los valores editables del producto
    const [nombre, setNombre] = useState(product.nombre); // Estado para el nombre del producto
    const [precio, setPrecio] = useState(product.precio); // Estado para el precio del producto
    const [imagen, setImagen] = useState(product.image); // Estado para la URL de la imagen del producto
    const [cantidad, setCantidad] = useState(product.stock); // Estado para la cantidad del producto en inventario
  
    // Función que se ejecuta al guardar los cambios
    const handleSave = () => {
      // Crear un objeto con los datos del producto actualizado
      const updatedProduct = {
        id_producto: product.id_producto, // ID único del producto
        nombre, // Nombre actualizado
        precio, // Precio actualizado
        image: imagen, // URL de la imagen actualizada
        stock: cantidad, // Cantidad actualizada
      };
  
      onSave(updatedProduct); // Llama la función pasada como prop para guardar los cambios
      onClose(); // Cierra el modal después de guardar
    };
  
    return (
      <div className="edit-modal">
        <div className="modal-content">
          <h2>Editar Producto</h2> {/* Título del modal */}
          
          {/* Input para editar el nombre del producto */}
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)} // Actualiza el estado del nombre
            />
          </label>
  
          {/* Input para editar el precio del producto */}
          <label>
            Precio:
            <input
              type="number"
              step="0.01"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)} // Actualiza el estado del precio
            />
          </label>
  
          {/* Input para editar la URL de la imagen del producto */}
          <label>
            Imagen (URL):
            <input
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)} // Actualiza el estado de la imagen
            />
          </label>
  
          {/* Input para editar la cantidad del producto en inventario */}
          <label>
            Cantidad:
            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)} // Actualiza el estado de la cantidad
            />
          </label>
  
          {/* Botones de acción del modal */}
          <div className="modal-actions">
            <button onClick={onClose}>Cancelar</button> {/* Botón para cerrar el modal */}
            <button onClick={handleSave}>Guardar</button> {/* Botón para guardar los cambios */}
          </div>
        </div>
      </div>
    );
  }
  
  export default EditModal;
  