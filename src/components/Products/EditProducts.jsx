import React, { useState } from "react";
import "../../styles/EditModal.css";
import { updateProduct } from "../../services/ProductsService"; // Ajusta la ruta si es necesario

function EditModal({ product, categories ,onClose, onSave }) {
  // Estados locales para manejar los valores editables del producto
  const today = new Date().toISOString();
  const [nombre, setNombre] = useState(product.nombre);
  const [precio, setPrecio] = useState(product.precio);
  const [imagen, setImagen] = useState(product.image);
  const [cantidad, setCantidad] = useState(product.stock);
  const [categoria, setCategoria] = useState(product.id_categoria);

  // Función que se ejecuta al guardar los cambios
  const handleSave = async () => {
    // Crear un objeto con los datos del producto actualizado
    const updatedProduct = {
      id_producto: product.id_producto,
      nombre,
      precio,
      stock: cantidad,
      fecha_creacion: today,
      foto_url : imagen,
      id_categoria: categoria,
    };

    try {
      // Llama al servicio para enviar los cambios al backend
      const response = await updateProduct(product.id_producto, updatedProduct);

      console.log("Producto actualizado en el backend:", response);

      // Llama la función pasada como prop para actualizar el estado en el frontend
      onSave(response);
      onClose(); // Cierra el modal después de guardar
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
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

         {/* Select para elegir la categoría */}
         <label>
          Categoría:
          <select
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value); // Actualiza el estado
              console.log("ID de categoría seleccionada:", e.target.value); // Verifica el ID seleccionado
            }}
          >
            {categories.map((cat) => (
              <option key={cat.id_categoria} value={cat.id_categoria}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </label>

        {/* Botones de acción del modal */}
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>{" "}
          {/* Botón para cerrar el modal */}
          <button onClick={handleSave}>Guardar</button>{" "}
          {/* Botón para guardar los cambios */}
        </div>
      </div>
    </div>
  );
}

export default EditModal;
