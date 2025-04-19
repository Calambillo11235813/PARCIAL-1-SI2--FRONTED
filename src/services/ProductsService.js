import axios from "axios"; // Importa Axios para gestionar solicitudes HTTP

/**
 * URL base del backend donde se encuentran los productos.
 * Asegúrate de actualizar esta URL según tu entorno (desarrollo o producción).
 */
const BASE_URL = "http://127.0.0.1:8000/api/tienda/productos/";

/**
 * Servicio para obtener la lista de productos desde el backend.
 * @returns {Promise} Una promesa que contiene los datos de los productos.
 */
export const fetchProducts = async () => {
  try {
    // Realiza la solicitud GET al backend
    const response = await axios.get(BASE_URL);
    return response.data; // Retorna los datos de los productos
  } catch (error) {
    console.error("Error al cargar los productos:", error.message);
    throw error; // Lanza el error para que sea manejado por el componente
  }
};

/**
 * Servicio para agregar un nuevo producto al backend.
 * @param {Object} product - Datos del producto a agregar.
 * @returns {Promise} Una promesa que contiene la respuesta del backend.
 */
export const addProduct = async (product) => {
  try {
    // Realiza la solicitud POST con los datos del producto
    const response = await axios.post(BASE_URL, product);
    return response.data; // Retorna la respuesta del backend
  } catch (error) {
    console.error("Error al agregar un producto:", error.message);
    throw error; // Lanza el error para que sea manejado
  }
};


/**
 * Servicio para actualizar un producto en el backend.
 * @param {string} productId - ID del producto a actualizar.
 * @param {Object} updatedData - Datos actualizados del producto.
 * @returns {Promise} Una promesa que contiene la respuesta del backend.
 */


export const updateProduct = async (productId, updatedData) => {
  try {
    console.log("Datos enviados al backend:", updatedData);
    // Realiza la solicitud PUT al backend con los datos actualizados
    const response = await axios.put(`${BASE_URL}${productId}/`, updatedData);
    return response.data; // Retorna la respuesta del backend
  } catch (error) {
    console.error("Error al actualizar el producto:", error.message);
    throw error; // Lanza el error para que sea manejado por el componente
  }
};


/**
 * Servicio para eliminar un producto por su ID.
 * @param {string} productId - ID del producto a eliminar.
 * @returns {Promise} Una promesa que contiene la respuesta del backend.
 */
export const deleteProduct = async (productId) => {
  try {
    // Realiza la solicitud DELETE al backend
    const response = await axios.delete(`${BASE_URL}/${productId}`);
    return response.data; // Retorna la respuesta del backend
  } catch (error) {
    console.error("Error al eliminar el producto:", error.message);
    throw error; // Lanza el error para que sea manejado
  }
};
