import React, { useState } from 'react';
import '../styles/login.css';

const Login = ({ setIsLoggedIn }) => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        // Verifica las credenciales aquí
        // if (correo === 'usuario' && password === 'contraseña') {
        //     setIsLoggedIn(true); // Establece el estado de autenticación como verdadero
        // } else {
        //     alert('Nombre de usuario o contraseña incorrectos');
        // }
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
