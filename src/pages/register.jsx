import React, { useState } from 'react';
import axios from '../api/axiosConfig';
import '../styles/register.css'; // Asegúrate de importar los estilos CSS
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        nombre: '',
        telefono: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        const { confirmPassword, ...dataToSend } = formData;

        try {
            const response = await axios.post('register/', dataToSend);
            console.log('Usuario registrado:', response.data);
            alert('¡Registro exitoso!');
        } catch (error) {
            console.error('Error al registrar:', error);
            alert('Hubo un problema con el registro.');
        }
    };

    return (
        <div className="form-page">
            <div className="form-container">
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmar contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Registrarse</button>
                    
                </form>
                <p>
                <Link to="/login" className="login-link">
                    ¿Ya tienes cuenta? Inicia sesión
                </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
