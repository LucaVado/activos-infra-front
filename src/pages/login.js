import React, { useState } from 'react';
import '../styles/login.css';
import API_BASE_URL from '../config';

const Login = ({ setIsLoggedIn }) => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${API_BASE_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo: correo,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Puedes realizar acciones adicionales si la autenticación fue exitosa
                console.log('Usuario autenticado:', data.user);
                setIsLoggedIn(true);
            } else {
                const errorData = await response.json();
                console.error('Error en la autenticación:', errorData.message);
                // Puedes mostrar un mensaje de error al usuario si lo deseas
            }
        } catch (error) {
            console.error('Hubo un problema al realizar la autenticación:', error);
        }
    };

    return (
        <div>
            <div className='login-container'>
                <div className='logo-login'>
                    <img src="/images/icons/paquetexpress-logo-navbar.svg" alt="Logo" />
                </div>
                <form className='login-form' onSubmit={handleLogin}>
                    <div className='form-control-login'>
                        <label for="correo">Correo</label>
                        <input
                            type="text"
                            id='correo'
                            placeholder="Correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className='form-control-login'>
                        <label for="password">Password</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <div className="form-button-login"><button class="btn-login" type="button" onClick={handleLogin}>Iniciar Sesión</button></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
