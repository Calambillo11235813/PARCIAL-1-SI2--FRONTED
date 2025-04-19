// src/api/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/auth/', // Cambia al dominio correcto si es necesario
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor para incluir el token en cada request si existe
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
