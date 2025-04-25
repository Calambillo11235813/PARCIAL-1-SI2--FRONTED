import React from "react";
import "../../styles/products/CategoryLisModal.css"; // Asegúrate de crear este archivo CSS

function CategoryListModal({ categories, onSelectCategory, onClose }) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Lista de Categorías</h2>
          <ul className="category-list">
            {categories.map((category) => (
              <li
                key={category.id_categoria}
                className="category-item"
                onClick={() => {
                  onSelectCategory(category.id_categoria); // Llama a la función para actualizar el estado en Products.jsx
                  onClose(); // Cierra el modal
                }}
              >
                {category.nombre}
              </li>
            ))}
          </ul>
          <button className="close-button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    );
  }
  
  export default CategoryListModal;
