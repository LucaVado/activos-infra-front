import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import API_BASE_URL from '../config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const token = Cookies.get('token');
      
          if (token) {
            // Si hay un token en las cookies, considera al usuario como autenticado
            setIsLoggedIn(true);
            console.log('entro al if token');
            try {
              // Realiza una solicitud al nuevo endpoint para obtener el token decodificado
              const response = await fetch(`${API_BASE_URL}/users/get-token`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
              });
            console.log('entro al try');

      
              if (response.ok) {
                const decodedToken = await response.json();
                setIsAdmin(decodedToken.decoded.user.tipoUsuario == 'Administrador' ? true: false);
                setUser(decodedToken.decoded.user);
            console.log('token', decodedToken);

            console.log('entro al if response', isAdmin);
            console.log(user);
        } else {
                console.error('Error decoding token:', response.statusText);
              }
            } catch (error) {
              console.error('Error:', error);
            }
          }
        };
      
        fetchData(); // Llama a la función asincrónica inmediatamente
      
      }, []);

    const login = (token, isAdmin, userData) => {
        setIsLoggedIn(true);
        setIsAdmin(isAdmin);
        setUser(userData);

        const expirationTimeInHours = 2;

        // Calcula la fecha de vencimiento en horas desde ahora
        const expirationDate = new Date(new Date().getTime() + expirationTimeInHours * 60 * 60 * 1000);

        // Almacena el token en localStorage o en cookies
        // localStorage.setItem('token', token);
        Cookies.set('token', token, { expires: expirationDate });
    };

    const logout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        setUser(null);

        // Elimina el token de localStorage o de cookies
        // localStorage.removeItem('token');
        Cookies.remove('token');
    };

    const authContextValue = {
        isLoggedIn,
        isAdmin,
        user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};