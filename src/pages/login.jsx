// src/components/Login.jsx
import React, { useState } from 'react';
import axios from '../api/axiosConfig';
import '../styles/login.css'; 

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('login/', credentials);
            const { access, refresh } = response.data;

            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);

            console.log('Login exitoso:', response.data);
            alert('Sesión iniciada correctamente');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Correo o contraseña incorrectos.');
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Entrar</button>
            </form>
            <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
        </div>
    );
};

export default Login;
