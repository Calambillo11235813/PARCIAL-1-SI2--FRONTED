import axios from 'axios'

/**
 * Obtiene la lista de categorías desde el backend.
 * 
 * @returns {Promise<Array>} Promesa que devuelve un arreglo de objetos .
 */
export const getCategories = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/tienda/categorias/')
    return response.data
  } catch (error) {
    console.error('Error al obtener categorías:', error)
    throw error
  }
}
