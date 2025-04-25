import React, { useState } from "react";
import "../../styles/products/EditProducts.css";
import { updateProduct } from "../../services/ProductsService"; // Ajusta la ruta si es necesario

function EditModal({ product, categories, onClose, onSave }) {
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
      foto_url: imagen,
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
      <div className="modal-content_2">
        <h2>Editar Producto</h2>

        {/* Formulario para editar el producto */}
        <form className="modal-form">
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label>
            Precio:
            <input
              type="number"
              step="0.01"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </label>
          <label>
            Imagen (URL):
            <input
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
          </label>
          <label>
            Cantidad:
            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            />
          </label>
          <label>
            Categoría:
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat.id_categoria} value={cat.id_categoria}>
                  {cat.nombre}
                </option>
              ))}
            </select>
          </label>
        </form>

        {/* Botones de acción en la parte inferior */}
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
