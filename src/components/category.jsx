
import { useEffect, useState } from 'react';
import { getCategories } from '../services/categoryservice';
import '../styles/tailwind.css';
import '../styles/category.css';

/**
 * Componente Categories
 * 
 * Este componente se encarga de mostrar dinámicamente una lista de categorías 
 * obtenidas desde el backend. Maneja estados de carga, éxito y error para 
 * proporcionar una experiencia fluida al usuario.
 * 
 * @returns {JSX.Element} La lista de categorías renderizada.
 */
function Categories() {
  // Estado para almacenar las categorías obtenidas del backend
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Hook useEffect
   * 
   * Este hook realiza la solicitud al servicio para obtener las categorías
   * cuando el componente se monta. Actualiza los estados de categorías, carga y error 
   * según el resultado de la operación asíncrona.
   */
  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data); // Almacena las categorías en el estado local
        setLoading(false);   // Indica que la carga ha finalizado
      })
      .catch(() => {
        setError('No se pudieron cargar las categorías'); 
        setLoading(false);                                
      });
  }, []); //
  // Renderiza un mensaje mientras los datos están cargando
  if (loading) return <p className="text-gray-500">Cargando categorías...</p>;

  // Renderiza un mensaje de error si no se pudieron cargar los datos
  if (error) return <p className="text-red-500">{error}</p>;

  /**
   * Renderiza las categorías obtenidas del backend.
   * 
   */
  return (

    <div className="categories-container_home">
    {categories.map((category) => (
      <span
        key={category.id_categoria}
        className="category-item_home_1"
      >
        {category.nombre}
      </span>
    ))}
  </div>


  );
}

// Exportación del componente para su uso en otros archivos
export default Categories;