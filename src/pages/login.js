import React, { useState } from 'react';
import '../styles/login.css';
import API_BASE_URL from '../config';
import { useAuth } from '../components/AuthContext';
import { showNotification } from '../utils/notification';
import { useNavigate } from 'react-router-dom';

const Login = (/* { setIsLoggedIn } */) => {
    const { login } = useAuth();
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/users/post-login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, password }),
          });
    
          if (response.ok) {
            const data = await response.json();
            const { token, isAdmin, isLoggedIn, userData } = data;
            console.log(data);
    
            login(token, isAdmin, userData);
    
            // window.location.href = '/';
            navigate('/');

          } else {
            console.error('Error en la autenticación:', response.statusText);
            showNotification('credenciales invalidas', 'error');
          }
        } catch (error) {
          console.error('Hubo un problema al realizar la autenticación:', error);
          showNotification("Credenciales invalidas");

        }
      };

    // const handleLogin = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const response = await fetch(`${API_BASE_URL}/users/login`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 correo: correo,
    //                 password: password,
    //             }),
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             // Puedes realizar acciones adicionales si la autenticación fue exitosa
    //             console.log('Usuario autenticado:', data.user);
    //             showNotification(data.message, 'success');
    //             setIsLoggedIn(true);
    //         } else {
    //             const errorData = await response.json();
    //             console.error('Error en la autenticación:', errorData.message);
    //             showNotification(errorData.message, 'error');
    //             // Puedes mostrar un mensaje de error al usuario si lo deseas
    //         }
    //     } catch (error) {
    //         console.error('Hubo un problema al realizar la autenticación:', error);
    //     }
    // };

    return (
        <div>
            <div className='login-container'>
                <div className='logo-login'>
                    <img src="/images/icons/paquetexpress-logo-navbar.svg" alt="Logo" />
                </div>
                <form className='login-form' onSubmit={handleLogin}>
                <div className='form-control-login'>
                        <label style={{fontSize:"20px", marginTop:"8px"}}>Inicia Sesión</label>
                    </div>
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
